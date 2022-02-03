import { fork } from "@redux-saga/core/effects";
import watchAuthSaga from "./authSaga";
import watchLoadDataSaga from "./todoSaga";

export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
  yield fork(watchAuthSaga);

}
