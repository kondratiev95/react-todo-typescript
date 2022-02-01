import { takeEvery, put, call } from "redux-saga/effects";
import * as actionCreators from "../actionsCreator";
import * as actions from "../actions";
import * as api from "../../api/todoAPI";
import { credentials, Todo } from "../../typescript/types";
// const CryptoJS = require("crypto-js");
import CryptoJS from 'crypto-js';
const secretKey = 'dasdsadasdsd'
const { SECRET_KEY } = process.env;

function* getTodos() {
  try {
    const res: Todo[] = yield call(api.getData);
    if (res) {
      yield put(actionCreators.getTodoSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    yield put(actionCreators.getTodosFailedAC(e.message));
  }
}

function* addTodo({ payload }: {payload: string, type: string}) {
  try {
    const res: Todo = yield call(api.addData, payload);
    if (res) {
      yield put(actionCreators.addItemSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    console.log("HELLO++++", e);
    yield put(actionCreators.addItemFailedAC(e.message));
  }
}

function* removeTodo({ payload }: { payload: string; type: string }) {
  try {
    const res: string = yield call(api.deleteItem, payload);
    if (res) {
      yield put(actionCreators.removeItemSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    yield put(actionCreators.removeItemFailedAC(e.message));
  }
}

function* checkboxHandler({ payload }: { payload: string; type: string }) {
  try {
    const res: Todo = yield call(api.toggleItem, payload);
    if (res) {
      yield put(actionCreators.checkboxSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    yield put(actionCreators.checkboxFailedAC(e.message));
  }
}

function* removeCompleted() {
  try {
    const res: Todo[] = yield call(api.deleteCompleted);
    if (res) {
      yield put(actionCreators.deleteCompletedSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    yield put(actionCreators.deleteCompletedFailedAC(e.message));
  }
}

function* handleAllCompleted({ payload }: { payload: boolean; type: string }) {
  try {
    const res: Todo[] = yield call(api.toggleAll, payload);
    if (res) {
      yield put(actionCreators.toggleAllSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    yield put(actionCreators.toggleAllFailedAC(e.message));
  }
}

function* editTodo({
  payload,
}: {
  payload: { id: string; value: string };
  type: string;
}) {
  try {
    const res: Todo = yield call(api.changeTodo, payload);
    if (res) {
      yield put(actionCreators.editTodoSuccessAC(res));
    } else {
      throw new Error("Could not get data");
    }
  } catch (e: any) {
    yield put(actionCreators.editTodoFailedAC(e.message));
  }
}

function* sendCredentials({payload} : { payload: credentials, type: string}) {
  try {
    // console.log('payload', payload)
    // payload.password = CryptoJS.AES.encrypt(payload.password, secretKey).toString();
    // console.log('secretKey', SECRET_KEY)
    // console.log('SECRET_PASSWORD', payload);
    const res: string = yield call(api.registrationApi, payload);
    if(res) {
      yield put(actionCreators.sendCredentialSuccessAC(res));
    } else {
      throw new Error("Send credentials failed");
    }
  } catch(e: any) {
    yield put(actionCreators.sendCredentialFailedAC(e.message));
  }
}
function* watchLoadDataSaga() {
  yield takeEvery(actions.sendCredentials.REQUEST, sendCredentials)
  yield takeEvery(actions.getTodoList.REQUEST, getTodos);
  yield takeEvery(actions.addTodoItem.REQUEST, addTodo);
  yield takeEvery(actions.removeTodoItem.REQUEST, removeTodo);
  yield takeEvery(actions.checkboxTodoHandler.REQUEST, checkboxHandler);
  yield takeEvery(actions.deleteCompletedTodo.REQUEST, removeCompleted);
  yield takeEvery(actions.handleAll.REQUEST, handleAllCompleted);
  yield takeEvery(actions.editTodoItem.REQUEST, editTodo);
}

export default function* rootSaga() {
  yield watchLoadDataSaga();
}
