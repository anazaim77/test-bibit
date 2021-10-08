import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(applyMiddleware())
  )
);
export let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
