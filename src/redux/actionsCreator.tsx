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
        type: actions.addTodoItem.REQUEST,//ADD_ITEM_REQUEST
        payload
    };
};
export const addItemSuccessAC: typesAC.addDataSuccessACType = payload => {
    return {
        type: actions.addTodoItem.SUCCESS,//ADD_ITEM_SUCCESS
        payload
    };
};
export const addItemFailedAC: typesAC.addDataFailedACType = payload => {
    return {
        type: actions.addTodoItem.FAILED,//ADD_ITEM_FAILED
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
        type: actions.setCurrentActionType.REQUEST,
        payload
    }
}

export const setDefaultRegistered = (payload?: boolean) => {
    return {
        type: actions.setDefaultIsRegistered.REQUEST,
        payload
    }
}
 


export const sendCredentialRequestAC: typesAC.credentialsRequestACType = payload => {
    return {
        type: actions.sendCredentials.REQUEST,
        payload
    }
}

export const sendCredentialSuccessAC: typesAC.credentialsSuccessACType = payload => {
    return {
        type: actions.sendCredentials.SUCCESS,
        payload
    }
}

export const sendCredentialFailedAC: typesAC.credentialsFailedACType = payload => {
    return {
        type: actions.sendCredentials.FAILED,
        payload
    }
}



export const sendLoginValueRequestAC: typesAC.sendLoginRequestACType = payload => {
    return {
        type: actions.sendLoginValue.REQUEST,
        payload
    }
}

export const sendLoginValueSuccessAC: typesAC.sendLoginSuccessACType = payload => {
    return {
        type: actions.sendLoginValue.SUCCESS,
        payload
    }
}

export const sendLoginValueFailedAC: typesAC.sendLoginFailedACType = payload => {
    return {
        type: actions.sendLoginValue.FAILED,
        payload
    }
}

export const logout = () => {
    return {
        type: actions.logout.REQUEST,
    }
}


export const setUserDataTokensAC = (payload: any) => {
    return {
        type: actions.setUsersDataTokens.REQUEST,
        payload
    }
}




