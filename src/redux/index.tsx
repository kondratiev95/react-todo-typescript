import { createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { todoReducer } from './reducers/todoReducer';
import rootSaga from "./sagas/rootSaga";
import { authReducer } from "./reducers/authReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    todoReducer,
    authReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);