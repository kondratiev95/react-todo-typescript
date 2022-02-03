import { appState, Todo } from "../../typescript/types";

export const filterTypeSelector: (state: any) => string = state => state.todoReducer.type;

export const getTodosSelector: (state: any) => Todo[] = state => state.todoReducer.todos;

export const getErrorSelector: (state: any) => string = state => state.todoReducer.error;