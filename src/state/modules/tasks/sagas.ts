import { put, takeEvery } from "redux-saga/effects"
import * as taskService from "../../../services/taskService"
import * as actions from './actions'
import * as constants from './constants'

function* getTasks(): Generator<any, any, any> {
    try {
      const response = yield taskService.getTasks()
      yield put(actions.getTasksSuccessAction(response?.tasks))
    } catch (e) {
      yield put(actions.getTasksFailedAction(e))
      console.log('error', e)
    }
  }

function* addTask(requestedData: any): Generator<any, any, any> {
    try {
      yield taskService.addTask(requestedData.payload)
      yield put(actions.addTaskSuccessAction())
    } catch (e) {
      yield put(actions.addTaskFailedAction(e))
      console.log('error', e)
    }
  }

  function* updateTask(requestedData: any): Generator<any, any, any> {
    try {
      yield taskService.updateTask(requestedData.payload)
      yield put(actions.updateTaskSuccessAction())
    } catch (e) {
      yield put(actions.updateTaskFailedAction(e))
      console.log('error', e)
    }
  }

  function* deleteTask(requestedData: any): Generator<any, any, any> {
    try {
      yield taskService.deleteTask(requestedData.payload)
      yield put(actions.deleteTaskSuccessAction())
    } catch (e) {
      yield put(actions.deleteTaskFailedAction(e))
      console.log('error', e)
    }
  }

  export function* taskSagas() {
    yield takeEvery([constants.GET_TASKS, constants.DELETE_TASK_SUCCESS, constants.ADD_TASK_SUCCESS, constants.UPDATE_TASK_SUCCESS], getTasks)
    yield takeEvery(constants.ADD_TASK, addTask)
    yield takeEvery(constants.UPDATE_TASK, updateTask)
    yield takeEvery(constants.DELETE_TASK, deleteTask)
  
  }