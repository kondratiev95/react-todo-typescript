import { takeEvery, put, call } from "redux-saga/effects";
import * as actionCreators from "../actionsCreator";
import * as actions from "../actions";
import * as api from "../../api/todoAPI";
import { editDataType, Todo } from "../../typescript/types";
 
function* getTodos() {
  try {
    const res: Todo[] | number  = yield call(api.getData);
    if (res as number === 401) {
      yield put(actionCreators.refreshRequestAC());
    } else {
      yield put(actionCreators.getTodoSuccessAC(res as Todo[]));
    }
  } catch (e: any) { 
    yield put(actionCreators.getTodosFailedAC(e.message));
  }
}
 
function* addTodo({ payload }: {payload: string, type: string}) {
  try {
    const res: Todo | number = yield call(api.addData, payload);
    if (res as number === 401) {
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.addItemSuccessAC(res as Todo));
    }
  } catch (e: any) {
    yield put(actionCreators.addItemFailedAC(e.message));
  }
}

function* removeTodo({ payload }: { payload: string; type: string }) {
  try {
    const res: string | number = yield call(api.deleteItem, payload)
    if (res as number === 401) {
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.removeItemSuccessAC(res as string))
    }
  } catch (e: any) {
    yield put(actionCreators.removeItemFailedAC(e.message))
  }
}

function* checkboxHandler({ payload }: { payload: string; type: string }) {
  try {
    const res: Todo | number = yield call(api.toggleItem, payload)
    if (res as number === 401) {
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.checkboxSuccessAC(res as Todo))
    }
  } catch (e: any) {
    yield put(actionCreators.checkboxFailedAC(e.message))
  }
}

function* removeCompleted() {
  try {
    const res: Todo[] | number = yield call(api.deleteCompleted)
    if (res as number === 401) {
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.deleteCompletedSuccessAC(res as Todo[]))
    }
  } catch (e: any) {
    yield put(actionCreators.deleteCompletedFailedAC(e.message))
  }
}

function* handleAllCompleted({ payload }: { payload: boolean; type: string }) {
  try {
    const res: Todo[] | number = yield call(api.toggleAll, payload)
    if (res === 401) {
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.toggleAllSuccessAC(res as Todo[]))
    }
  } catch (e: any) {
    yield put(actionCreators.toggleAllFailedAC(e.message))
  }
}

function* editTodo({ payload }: editDataType) {
  try {
    const res: Todo | number = yield call(api.changeTodo, payload)
    if (res as number === 401) {
      yield put(actionCreators.refreshRequestAC())
    } else {
      yield put(actionCreators.editTodoSuccessAC(res as Todo))
    }
  } catch (e: any) {
    yield put(actionCreators.editTodoFailedAC(e.message))
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