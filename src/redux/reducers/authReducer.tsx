import { actionType } from "../../typescript/types"
import * as actions from "../actions";

const initialState = {
    isRegistered: false,
    error: ''
}


export const authReducer = (state = initialState, action: actionType) => {
    switch(action.type) {
        case actions.sendCredentials.SUCCESS: 
        console.log('SUCCESS', action.payload)
            return {
                ...state,
                isRegistered: true
            }
        case actions.sendCredentials.FAILED:
            console.log('FAILED', action.payload)
            return {
                ...state,
                error: action.payload
            }
    }

    return state;
}