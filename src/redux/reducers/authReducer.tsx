import { actionType } from "../../typescript/types"
import * as actions from "../actions";

const initialState = {
    isRegistered: false,
    error: '',
    accessToken: null,
    refreshToken: null,
    userName: null
}


export const authReducer = (state = initialState, action: actionType) => {
    switch(action.type) {
        case actions.sendCredentials.SUCCESS: 
            return {
                ...state,
                isRegistered: action.payload as boolean,
            }
        case actions.sendCredentials.FAILED:
            return {
                ...state,
                error: action.payload
            }
        case actions.setDefaultIsRegistered.REQUEST:
            return {
                ...state,
                isRegistered: false
            }
        case actions.sendLoginValue.SUCCESS:
            return {
                ...state,
                accessToken: action.payload.tokens.accessToken,
                refreshToken: action.payload.tokens.refreshToken,
                userName: action.payload.tokens.userName,
            }
        
    }

    return state;
}