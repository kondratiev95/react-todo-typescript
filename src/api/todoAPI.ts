import { BASE_URL, ENDPOINTS } from "./apiConstants";
import * as apiTypes from '../typescript/apiTypes';
import { getAccessToken } from "../utils/utils";

const postParams: apiTypes.dataType = data => {
    const accessToken = getAccessToken();
    return {
        method: 'POST',
        headers: {
            "Content-type": "text/plain",
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    }
}

//@ts-ignore
export const getData: apiTypes.setGetDataType = async () => {
    const accessToken = getAccessToken();
    try {
        const response = await fetch(BASE_URL, { headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }, method: 'GET'});
        console.log('response', response);

        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('QQQQERRRRRR',error);
        
        throw new Error('Something went wrong');
    }
}

export const addData: apiTypes.setAddDataType = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.addData}`, postParams(data));
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('add-data:', error);
    }
} 

export const deleteItem: apiTypes.setDeleteItemType = async (data) => {
    console.log('DATA77777777777777', data);
    
    try {
        const response = await fetch(`${BASE_URL }${ENDPOINTS.removeItem}`, postParams(data));
        // console.log('response++++REMOVE', response);
        
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('delete-item:', error);
    }
}

export const toggleItem: apiTypes.setToggleItemType  = async (data) => {
    try {
        const response = await fetch(`${BASE_URL }${ENDPOINTS.toggleItem}`, postParams(data));
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('toggle-item:', error);
    }
}

export const toggleAll: apiTypes.setToggleAllType = async (data) => {
    try {  
        const response = await fetch(`${BASE_URL }${ENDPOINTS.toggleAll}`, postParams(data));
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('toggle-all:', error);
    }
}

export const deleteCompleted: apiTypes.setDelCompletedType = async () => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.deleteCompleted}`, postParams(null));
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('delete-completed:', error);
    }
}

export const changeTodo: apiTypes.setChangeTodoType = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.editTodo}`, postParams(data));
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else {
            return response
        }
    } catch(error) {
        console.log('edit-todo:', error);
    }
}