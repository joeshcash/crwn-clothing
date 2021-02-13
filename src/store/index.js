import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./reducers/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  createLogger({
    predicate: () => process.env.NODE_ENV === "development",
    collapsed: true,
  }),
];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
