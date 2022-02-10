import { takeEvery, put, call } from "redux-saga/effects";
import * as actionCreators from "../actionsCreator";
import * as actions from "../actions";
import * as api from "../../api/todoAPI";
import { Todo } from "../../typescript/types";
 
function* getTodos() {
  try {
    const res: Todo[]  = yield call(api.getData);
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC());
    } else {
      yield put(actionCreators.getTodoSuccessAC(res));
    }
    // if (res) {
    //   yield put(actionCreators.getTodoSuccessAC(res));
    // } else {
    //   console.log(res)
    //   throw new Error("Could not get data");
    // }
  } catch (e: any) {
    console.log('sdasdasdadsdads', e);
    yield put(actionCreators.getTodosFailedAC(e.message));
  }
}
 
function* addTodo({ payload }: {payload: string, type: string}) {
  try {
    const res: Todo = yield call(api.addData, payload);
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.addItemSuccessAC(res));
    }
  } catch (e: any) {
    console.log("HELLO++++", e);
    yield put(actionCreators.addItemFailedAC(e.message));
  }
}

function* removeTodo({ payload }: { payload: string; type: string }) {
  try {
    const res: string = yield call(api.deleteItem, payload);
    
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.removeItemSuccessAC(res));
    }
  } catch (e: any) {
    yield put(actionCreators.removeItemFailedAC(e.message));
  }
}

function* checkboxHandler({ payload }: { payload: string; type: string }) {
  try {
    const res: Todo = yield call(api.toggleItem, payload);
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.checkboxSuccessAC(res));
    }
  } catch (e: any) {
    yield put(actionCreators.checkboxFailedAC(e.message));
  }
}

function* removeCompleted() {
  try {
    const res: Todo[] = yield call(api.deleteCompleted);
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.deleteCompletedSuccessAC(res));
    }
  } catch (e: any) {
    yield put(actionCreators.deleteCompletedFailedAC(e.message));
  }
}

function* handleAllCompleted({ payload }: { payload: boolean; type: string }) {
  try {
    const res: Todo[] = yield call(api.toggleAll, payload);
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.toggleAllSuccessAC(res));;
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
    //@ts-ignore
    if (res.status === 401) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.editTodoSuccessAC(res));;
    }
  } catch (e: any) {
    yield put(actionCreators.editTodoFailedAC(e.message));
  }
}
 
export default function* watchLoadDataSaga() { 
  yield takeEvery(actions.getTodoList.REQUEST, getTodos);
  yield takeEvery(actions.addTodoItem.REQUEST, addTodo);
  yield takeEvery(actions.removeTodoItem.REQUEST, removeTodo);
  yield takeEvery(actions.checkboxTodoHandler.REQUEST, checkboxHandler);
  yield takeEvery(actions.deleteCompletedTodo.REQUEST, removeCompleted);
  yield takeEvery(actions.handleAll.REQUEST, handleAllCompleted);
  yield takeEvery(actions.editTodoItem.REQUEST, editTodo);
}