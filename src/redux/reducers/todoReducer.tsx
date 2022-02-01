import * as actions from "../actions";
import { actionType, appState, Todo } from "../../typescript/types";

const initialState: appState  = {
    todos: [],
    type: 'all',
    error: ''
}

export const todoReducer = (state = initialState, action: actionType) => {
    switch(action.type) {
        case 'SET_TYPE':
            return {
                ...state,
                type: action.payload as string
            }
        case actions.addTodoItem.SUCCESS: 
            return {
                ...state,
                todos: [...state.todos, action.payload] as Todo[]
            }
        case actions.removeTodoItem.SUCCESS:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo._id !== action.payload)] as Todo[]
            }
        case actions.editTodoItem.SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo._id === action.payload.id) {
                        return {
                            ...todo,
                            value: action.payload.value as string
                        }
                    } else {
                        return todo as Todo
                    }
                })
            }
        case actions.checkboxTodoHandler.SUCCESS:
            return {
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo._id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                })]
            }
        case actions.deleteCompletedTodo.SUCCESS:
        case actions.getTodoList.SUCCESS:
        case actions.handleAll.SUCCESS:
            return {
                ...state,
                todos: [...action.payload],
                error: '',
            }
        case actions.getTodoList.FAILED:
        case actions.addTodoItem.FAILED:
        case actions.removeTodoItem.FAILED:
        case actions.checkboxTodoHandler.FAILED:
        case actions.deleteCompletedTodo.FAILED:
        case actions.handleAll.FAILED:
        case actions.editTodoItem.FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }   
};