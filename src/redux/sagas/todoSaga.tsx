import { takeEvery, put, call } from "redux-saga/effects";
import * as actionCreators from "../actionsCreator";
import * as actions from "../actions";
import * as api from "../../api/todoAPI";
import { Todo } from "../../typescript/types";
 
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
 
export default function* watchLoadDataSaga() { 
  yield takeEvery(actions.getTodoList.REQUEST, getTodos);
  yield takeEvery(actions.addTodoItem.REQUEST, addTodo);
  yield takeEvery(actions.removeTodoItem.REQUEST, removeTodo);
  yield takeEvery(actions.checkboxTodoHandler.REQUEST, checkboxHandler);
  yield takeEvery(actions.deleteCompletedTodo.REQUEST, removeCompleted);
  yield takeEvery(actions.handleAll.REQUEST, handleAllCompleted);
  yield takeEvery(actions.editTodoItem.REQUEST, editTodo);
}