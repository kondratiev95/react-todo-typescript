import { BASE_URL, ENDPOINTS } from "./apiConstants";
import * as apiTypes from '../typescript/apiTypes';



const postParams: apiTypes.dataType = data => {
    return {
        method: 'POST',
        headers: {
            'Content-type': 'text/plain',
        },
        body: JSON.stringify(data)
    }
}

export const getData: apiTypes.setGetDataType = async () => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch(error) {
        throw new Error('Something went wrong');
    }
}

export const addData: apiTypes.setAddDataType = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.addData}`, postParams(data));
        return response.json();
    } catch(error) {
        console.log('add-data:', error);
    }
} 

export const deleteItem: apiTypes.setDeleteItemType = async (data) => {
    try {
        const response = await fetch(`${BASE_URL }${ENDPOINTS.removeItem}`, postParams(data));
        return response.json();
    } catch(error) {
        console.log('delete-item:', error);
    }
}

export const toggleItem: apiTypes.setToggleItemType  = async (data) => {
    try {
        const response = await fetch(`${BASE_URL }${ENDPOINTS.toggleItem}`, postParams(data));
        return response.json();
    } catch(error) {
        console.log('toggle-item:', error);
    }
}

export const toggleAll: apiTypes.setToggleAllType = async (data) => {
    try {  
        const response = await fetch(`${BASE_URL }${ENDPOINTS.toggleAll}`, postParams(data));
        return response.json();
    } catch(error) {
        console.log('toggle-all:', error);
    }
}

export const deleteCompleted: apiTypes.setDelCompletedType = async () => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.deleteCompleted}`, postParams(null));
        return response.json();
    } catch(error) {
        console.log('delete-completed:', error);
    }
}

export const changeTodo: apiTypes.setChangeTodoType = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.editTodo}`, postParams(data));
        return response.json();
    } catch(error) {
        console.log('edit-todo:', error);
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