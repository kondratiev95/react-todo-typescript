import * as actions from "./actions";
import * as typesAC from '../typescript/actionCreatorType';


export const getTodoRequestAC: typesAC.setTodoRequestACType = () => {
    return {
        type: actions.getTodoList.REQUEST,
        payload: null
    };
};
export const getTodoSuccessAC: typesAC.setTodoSuccessACType = payload => {
    return {
        type: actions.getTodoList.SUCCESS,
        payload
    };
};
export const getTodosFailedAC: typesAC.setTodoFailedACType  = payload => {
    return {
        type: actions.getTodoList.FAILED,
        payload
    };
};



export const addItemRequestAC: typesAC.addDataRequestACType = payload => {
    return {
        type: actions.addTodoItem.REQUEST,
        payload
    };
};
export const addItemSuccessAC: typesAC.addDataSuccessACType = payload => {
    return {
        type: actions.addTodoItem.SUCCESS,
        payload
    };
};
export const addItemFailedAC: typesAC.addDataFailedACType = payload => {
    return {
        type: actions.addTodoItem.FAILED,
        payload
    }
}



export const removeItemRequestAC: typesAC.removeTodoRequestACType = payload => {
    return {
        type: actions.removeTodoItem.REQUEST,
        payload
    }
}
export const removeItemSuccessAC: typesAC.removeTodoSuccessACType = (payload: string) => {
    return {
        type: actions.removeTodoItem.SUCCESS,
        payload
    }
}
export const removeItemFailedAC: typesAC.removeTodoFailedACType = payload => {
    return {
        type: actions.removeTodoItem.FAILED,
        payload
    }
}



export const checkboxRequestAC: typesAC.checkboxRequestACType = payload => {
    return {
        type: actions.checkboxTodoHandler.REQUEST,
        payload
    }
}
export const checkboxSuccessAC: typesAC.checkboxSuccessACType = payload => {
    return {
        type: actions.checkboxTodoHandler.SUCCESS,
        payload
    }
}
export const checkboxFailedAC: typesAC.checkboxFailedACType = payload => {
    return {
        type: actions.checkboxTodoHandler.FAILED,
        payload
    }
}



export const deleteCompletedRequestAC: typesAC.deleteCompletedRequestACType = () => {
    return {
        type: actions.deleteCompletedTodo.REQUEST,
        payload: null
    }
}
export const deleteCompletedSuccessAC: typesAC.deleteCompletedSuccessACType= payload => {
    return {
        type: actions.deleteCompletedTodo.SUCCESS,
        payload
    }
}
export const deleteCompletedFailedAC: typesAC.deleteCompletedFailedACType = payload => {
    return {
        type: actions.deleteCompletedTodo.FAILED,
        payload
    }
}



export const toggleAllRequestAC: typesAC.toggleAllRequestACType = payload=> {
    return {
        type: actions.handleAll.REQUEST,
        payload
    }
}
export const toggleAllSuccessAC: typesAC.toggleAllSuccessACType = payload => {
    return {
        type: actions.handleAll.SUCCESS,
        payload
    }
}
export const toggleAllFailedAC: typesAC.toggleAllFailedACType = payload => {
    return {
        type: actions.handleAll.FAILED,
        payload
    }
}


export const editTodoRequestAC: typesAC.editTodoRequestACType = payload => {
    return {
        type: actions.editTodoItem.REQUEST,
        payload: payload
    }
}
export const editTodoSuccessAC: typesAC.editTodoSuccessACType = payload => {
    return {
        type: actions.editTodoItem.SUCCESS,
        payload: payload
    }
}
export const editTodoFailedAC: typesAC.editTodoFailedACType = payload => {
    return {
        type: actions.editTodoItem.FAILED,
        payload
    }
}

export const setCurrentTypeAC = (payload: string) => {
    return {
        type: 'SET_TYPE',
        payload
    }
}






