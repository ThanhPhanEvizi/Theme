import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import uiReducer from "../redux/ui/UiSlice";
import { history } from "../until/saga/history";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(sagaMiddleware)
      .concat(routerMiddleware(history)), //thêm saga middleware và routerMiddleware
});

sagaMiddleware.run(rootSaga); //saga middleware chạy rootSaga

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
