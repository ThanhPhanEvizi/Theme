import { call, put, takeLatest } from "redux-saga/effects";
import uiApi from "../../api/ui";
import { fetchColorMode, fetchColorModeSuccess } from "./UiSlice";

interface ColorModeApiItems {
  value: string;
  color: string;
}

function* randomMode() {
  try {
    const responsive: { success: ColorModeApiItems } = yield call(
      uiApi.randomMode
    );
    yield put(fetchColorModeSuccess(responsive.success.value));
  } catch (error) {
    console.error(error);
  }
}

export default function* uiSaga() {
  yield takeLatest(fetchColorMode.type, randomMode);
}
