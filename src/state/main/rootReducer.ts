import { combineReducers } from "redux";
import taskReducer from "../modules/tasks/reducer";


const reducers = combineReducers({
    task: taskReducer
})

export default reducers
