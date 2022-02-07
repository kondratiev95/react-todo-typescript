import { takeEvery, put, call } from "redux-saga/effects";
import * as actionCreators from "../actionsCreator";
import * as actions from "../actions";
import * as api from "../../api/authApi";
import { credentials } from "../../typescript/types";
import CryptoJS from 'crypto-js';

const setUserData = (userData: any) => {
    localStorage.setItem('username', userData.username);
    localStorage.setItem('accessToken', userData.tokens.accessToken);
    localStorage.setItem('refreshToken', userData.tokens.refreshToken);
}

function* sendCredentials({payload} : { payload: credentials, type: string}) {
  try {
    const encryptedPass = CryptoJS.AES.encrypt(payload.password, process.env.REACT_APP_SECRET_KEY!).toString();
    const res: boolean = yield call(api.registrationApi, {
      username: payload.username,
      password: encryptedPass,
    });
    if(res) {
      yield put(actionCreators.sendCredentialSuccessAC(res));
    } else {
      throw new Error("Send credentials failed");
    }
  } catch(e: any) {
    yield put(actionCreators.sendCredentialFailedAC(e.message));
  }
}

function* sendLogin({payload} : { payload: credentials, type: string}) {
  try {
    const encryptedPass = CryptoJS.AES.encrypt(payload.password, process.env.REACT_APP_SECRET_KEY as string).toString();
    const res: string = yield call(api.sendLoginApiValue, {
      username: payload.username,
      password: encryptedPass,
    });
    if(res) {
      console.log(res);
      setUserData(res);
      yield put(actionCreators.sendLoginValueSuccessAC(res));
    } else {
      throw new Error("Send login data failed");
    }
  } catch(e: any) {
    yield put(actionCreators.sendLoginValueFailedAC(e.message));
  }
}


export default function* watchAuthSaga() {
  yield takeEvery(actions.sendCredentials.REQUEST, sendCredentials);
  yield takeEvery(actions.sendLoginValue.REQUEST, sendLogin);
}