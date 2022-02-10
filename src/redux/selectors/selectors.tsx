import { appState, Todo } from "../../typescript/types";

interface TodoState {
    todoReducer: appState
}

interface AuthState {
    authReducer: { 
        isRegistered: boolean
        error: string
        accessToken: string
        userName: string
        compareTokensErrro: string
        refreshToken: string
    }
}

export const filterTypeSelector: (state: TodoState) => string = state => state.todoReducer.type;

export const getTodosSelector: (state: TodoState) => Todo[] = state => state.todoReducer.todos;

export const getErrorSelector: (state: TodoState) => string = state => state.todoReducer.error;

export const getIsRegistered: (state: AuthState) => boolean = state => state.authReducer.isRegistered;

export const getSignUpError: (state: AuthState) => string = state => state.authReducer.error;

export const getRefreshToken: (state: AuthState) => string = state => state.authReducer.refreshToken;

export const getAccessToken: (state: AuthState) => string = state => state.authReducer.accessToken;

export const getUserName: (state: AuthState) => string = state => state.authReducer.userName;

export const getCompareError: (state: AuthState) => string = state => state.authReducer.compareTokensErrro;