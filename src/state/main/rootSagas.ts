import { all, call, spawn } from "redux-saga/effects";
import { taskSagas } from "../modules/tasks/sagas";
// Combine sagas
export default  function* rootSaga () {
    const sagas = [
      taskSagas,
    ];
  
    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
  }