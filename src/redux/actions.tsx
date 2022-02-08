import { createActionType } from "../typescript/types";

export const createActions: createActionType = type => {
    return {
        REQUEST: `${type}_REQUEST`,
        SUCCESS: `${type}_SUCCESS`,
        FAILED: `${type}_FAILED`
    }
}

export const getTodoList = createActions('GET_TODO');

export const addTodoItem = createActions('ADD_ITEM');

export const removeTodoItem = createActions('REMOVE_ITEM');

export const checkboxTodoHandler = createActions('CHECKBOX_HANDLER');

export const deleteCompletedTodo = createActions('DELETE_COMPLETED');

export const handleAll = createActions('TOGGLE_ALL');

export const editTodoItem = createActions('EDIT_TODO');

export const sendCredentials = createActions('SEND_CREDENTIALS');

export const setCurrentActionType = createActions('SET_TYPE');

export const sendLoginValue = createActions('SEND_LOGIN_VALUE');

export const setDefaultIsRegistered = createActions('SET_DEFAULT_REGISTERED');

export const logout = createActions('LOGOUT');

export const setUsersDataTokens = createActions('SET_DATA_TOKENS');





