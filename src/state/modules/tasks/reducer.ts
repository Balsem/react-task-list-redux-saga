import * as constants from './constants'
import { AnyAction } from 'redux'

const initialState = {
    isLoading: false,
    successResponse: false,
    taskList: [],
    error: null
};

const taskReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case constants.GET_TASKS:
        case constants.ADD_TASK:
        case constants.UPDATE_TASK:
        case constants.DELETE_TASK:
            return {
                ...state,
                isLoading: true,
            };
        case constants.GET_TASKS_SUCCESS:
            return {
                ...state,
                taskList: action.payload,
                isLoading: false,
            };
        case constants.GET_TASKS_FAILED:
        case constants.ADD_TASK_FAILED:
        case constants.UPDATE_TASK_FAILED:
        case constants.DELETE_TASK_FAILED:
            return {
                ...state,
                error: action.payload,
                successResponse: false,
                isLoading: false,
            };
        case constants.ADD_TASK_SUCCESS:
        case constants.UPDATE_TASK_SUCCESS:
        case constants.DELETE_TASK_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                successResponse: true,
            };



        default:
            return state
    }
}

export default taskReducer