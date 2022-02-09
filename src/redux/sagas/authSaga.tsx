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
     
    console.log('SAGAA', res);
    if(res) {
      setUserData(res);
      console.log('SAGAA', res);
      yield put(actionCreators.sendLoginValueSuccessAC(res));
    } else {
      throw new Error("Send login data failed");
    }
  } catch(e: any) {
    console.log("SAGAAAAAAAAAAAAAAaa", e)
    yield put(actionCreators.sendLoginValueFailedAC(e.message));
  }
}

export function* refreshSaga() {
   
  try {
    const userData = {
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken'),
      username: localStorage.getItem('username')
    }
    //@ts-ignore
    const res: any = yield call(api.refreshApi, userData);
    console.log('RESSSSSSSSSSSSSSSS', res)
    if(res) {
      setUserData(res);
      yield put(actionCreators.refreshSuccessAC(res));
    } else {
      throw new Error("Send login data failed");
    }
  } catch(e: any) {
    yield put(actionCreators.refreshFailedAC(e.message));
  }
}


export default function* watchAuthSaga() {
  yield takeEvery(actions.refreshActions.REQUEST, refreshSaga)
  yield takeEvery(actions.sendCredentials.REQUEST, sendCredentials);
  yield takeEvery(actions.sendLoginValue.REQUEST, sendLogin);
}