export type editTodoType = (id: string, value: string) => void;
export type createActionType = (type: string) => {REQUEST: string, SUCCESS: string, FAILED: string};

export type Todo = {
    value: string,
    _id: string,
    completed: boolean
}

export type appState = {
    todos: Todo[],
    type: string,
    error: string
}    

export type setFilterTypeSelector = (state: appState) => string;
export type setTodosTypeSelector = (state: appState) => Todo[];
export type setErrorTypeSelector = (state: appState) => string;

export type actionType = {
    type: string,
    payload: any
}

export type credentials = {
    username: string,
    password: any
}




 