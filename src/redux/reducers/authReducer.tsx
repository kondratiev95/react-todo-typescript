import { actionType } from "../../typescript/types";
import * as actions from "../actions";

const initialState = {
  isRegistered: false,
  error: "",
  accessToken: null,
  refreshToken: null,
  userName: null,
  compareTokensError: null
};

export const authReducer = (state = initialState, action: actionType) => {
  
  switch (action.type) {

    case actions.sendCredentials.SUCCESS:
      return {
        ...state,
        isRegistered: action.payload as boolean,
      };

    case actions.sendCredentials.FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case actions.setDefaultIsRegistered.REQUEST:
      return {
        ...state,
        isRegistered: false,
      };

    case actions.sendLoginValue.SUCCESS:
      return {
        ...state,
        accessToken: action.payload.tokens.accessToken,
        refreshToken: action.payload.tokens.refreshToken,
        userName: action.payload.username,
      };

    case actions.logout.REQUEST:
      return {
        ...initialState,
      };

    case actions.setUsersDataTokens.REQUEST: 
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,  
      }

    case actions.refreshActions.SUCCESS:
      return {
        ...state,
        accessToken: action.payload.tokens.accessToken,
        refreshToken: action.payload.tokens.refreshToken,
        userName: action.payload.username,
      }

    case actions.refreshActions.FAILED: 
      return {
        ...state,
        compareTokensError: action.payload
      }

  }

  return state;
};
