import { ITask, ITaskUpdate } from '../../../types/tasks'
import * as constants from './constants'

export const getTasksAction = () => ({
    type: constants.GET_TASKS,
  })
  
  export const getTasksSuccessAction = (payload: ITask[]) => ({
    type: constants.GET_TASKS_SUCCESS,
    payload,
  })
  
  export const getTasksFailedAction = (payload: any) => ({
    type: constants.GET_TASKS_FAILED,
    payload,
  })

  export const addTaskAction = (payload: ITaskUpdate) => ({
    type: constants.ADD_TASK,
    payload
  })
  
  export const addTaskSuccessAction = () => ({
    type: constants.ADD_TASK_SUCCESS,
  })
  
  export const addTaskFailedAction = (payload: any) => ({
    type: constants.ADD_TASK_FAILED,
    payload,
  })

  export const updateTaskAction = (payload: ITaskUpdate) => ({
    type: constants.UPDATE_TASK,
    payload
  })
  
  export const updateTaskSuccessAction = () => ({
    type: constants.UPDATE_TASK_SUCCESS,
  })
  
  export const updateTaskFailedAction = (payload: any) => ({
    type: constants.UPDATE_TASK_FAILED,
    payload,
  })
  export const deleteTaskAction = (payload: number) => ({
    type: constants.DELETE_TASK,
    payload
  })
  
  export const deleteTaskSuccessAction = () => ({
    type: constants.DELETE_TASK_SUCCESS,
  })
  
  export const deleteTaskFailedAction = (payload: any) => ({
    type: constants.DELETE_TASK_FAILED,
    payload,
  })
