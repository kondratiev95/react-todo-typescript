import { BASE_URL, ENDPOINTS } from "./apiConstants";
import * as apiTypes from '../typescript/apiTypes';

const postParams: apiTypes.dataType = data => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data)
    }
     
}

export const registrationApi: apiTypes.setRegistrationApi = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.signup}`, postParams(data));
        return response.json();
    } catch(error: any) {
        throw new Error(error);
    }
}

export const sendLoginApiValue: apiTypes.setLoginApiType = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.signin}`, postParams(data));        
        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

 export const refreshApi: apiTypes.refreshApiType = async(data) => {
     try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.refresh}`, postParams(data));
        return response.json();
     } catch (error: any) {
         throw new Error(error);
     }
 }
