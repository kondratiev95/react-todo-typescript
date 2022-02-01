import * as actions from '../redux/actions'
import { credentials, Todo } from './types';

export type  setTodoRequestACType = () => { type: typeof actions.getTodoList.REQUEST, payload?: any};

export type  setTodoSuccessACType = (payload: Todo[]) => { type: typeof actions.getTodoList.SUCCESS, payload: Todo[]};

export type  setTodoFailedACType = (payload?: string) => { type: typeof actions.getTodoList.FAILED, payload?: string };


export type addDataRequestACType = (payload: string) => { type: typeof actions.addTodoItem.REQUEST, payload: string};

export type addDataSuccessACType = (payload: Todo) => { type: typeof actions.addTodoItem.SUCCESS, payload: Todo};

export type addDataFailedACType = (payload?: string) => { type: typeof actions.addTodoItem.FAILED, payload?: string};


export type removeTodoRequestACType = (payload: string) => { type: typeof actions.removeTodoItem.REQUEST, payload: string};

export type removeTodoSuccessACType = (payload: string) => { type: typeof actions.removeTodoItem.SUCCESS, payload: string};

export type removeTodoFailedACType = (payload?: string) => { type: typeof actions.removeTodoItem.FAILED, payload?: string};


export type checkboxRequestACType = (payload: string) => { type: typeof actions.checkboxTodoHandler.REQUEST, payload: string};

export type checkboxSuccessACType = (payload: Todo) => { type: typeof actions.checkboxTodoHandler.SUCCESS, payload: Todo};

export type checkboxFailedACType = (payload?: string) => { type: typeof actions.checkboxTodoHandler.FAILED, payload?: string};


export type deleteCompletedRequestACType = () => { type: typeof actions.deleteCompletedTodo.REQUEST, payload?: any };

export type deleteCompletedSuccessACType = (payload: Todo[]) => { type: typeof actions.deleteCompletedTodo.SUCCESS, payload: Todo[] };

export type deleteCompletedFailedACType = (payload?: string) => { type: typeof actions.deleteCompletedTodo.FAILED, payload?: string };


export type toggleAllSuccessACType = (payload: Todo[]) => { type: typeof actions.handleAll.SUCCESS, payload: Todo[] };

export type toggleAllRequestACType = (payload: boolean) => { type: typeof actions.handleAll.REQUEST, payload: boolean};

export type toggleAllFailedACType = (payload?: string) => { type: typeof actions.handleAll.FAILED, payload?: string };



export type editTodoRequestACType = (payload: {id: string, value: string}) => ({ 
    type: typeof actions.editTodoItem.REQUEST, payload: {id: string, value: string}
})
export type editTodoSuccessACType = (payload: Todo) => ({ 
    type: typeof actions.editTodoItem.SUCCESS, payload: Todo
})
export type editTodoFailedACType = (payload?: string) => ({ 
    type: typeof actions.editTodoItem.FAILED, payload?: string
})


export type credentialsRequestACType = (payload: credentials) => { type: typeof actions.sendCredentials.REQUEST, payload: credentials};

export type credentialsSuccessACType = (payload: any) => { type: typeof actions.sendCredentials.SUCCESS, payload: any};

export type credentialsFailedACType = (payload?: string) => { type: typeof actions.sendCredentials.FAILED, payload?: string};


