import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./rootReducer";
import rootSaga from "./rootSagas";


// Define middlewares to include
const sagaMiddleware = createSagaMiddleware();
// Add all middlewares into an array
const middleware = [sagaMiddleware];

// Add the Redux dev tools and middleware code together
const enhancers = compose(
  applyMiddleware(...middleware),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: Function) => f
);

// Create a store with the reducers and middleware
export const store = createStore(reducers,  enhancers);


// Run the Redux Saga middleware listeners
sagaMiddleware.run(rootSaga);