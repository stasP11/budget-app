import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReduser from "./reducers";
import { rootSaga } from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

// it is wrapper for dev-tools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: "my-app" })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReduser, enhancer);

sagaMiddleware.run(rootSaga);
