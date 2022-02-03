import { takeEvery, put, call } from "redux-saga/effects";
import * as actionCreators from "../actionsCreator";
import * as actions from "../actions";
import * as api from "../../api/todoAPI";
import { credentials } from "../../typescript/types";
import CryptoJS from 'crypto-js';

function* sendCredentials({payload} : { payload: credentials, type: string}) {
    try {
      console.log('payload', payload)
      const BASE_URL = process.env.REACT_APP_SECRET_KEY
      console.log('hhh', BASE_URL)
      const encryptedPass = CryptoJS.AES.encrypt(payload.password, process.env.REACT_APP_SECRET_KEY!).toString();
      console.log('encryptedPass', encryptedPass);
      console.log('process.env.REACT_APP_SECRET_KEY', process.env.REACT_APP_SECRET_KEY);
  
      const res: string = yield call(api.registrationApi, {
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
  export default function* watchAuthSaga() {
    yield takeEvery(actions.sendCredentials.REQUEST, sendCredentials);
  }