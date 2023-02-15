import { all } from "redux-saga/effects";
import uiSaga from "../redux/ui/UiSaga";

export default function* rootSaga() {
  yield all([uiSaga()]);
}
