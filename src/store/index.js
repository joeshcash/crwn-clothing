import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers/rootReducer";

const middlewares = [
  createLogger({
    predicate: () => process.env.NODE_ENV === "development",
    collapsed: true,
  }),
];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
