import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface UiState {
  mode: string;
  loading: boolean;
}

const initialState: UiState = {
  mode: "",
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    fetchColorMode(state) {
      state.loading = true;
    },
    fetchColorModeSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.mode = action.payload;
    },
    fetchColorModeFailed(state) {
      state.loading = false;
    },
    changeMode(state, action: PayloadAction<string>) {
      state.mode = action.payload;
    },
  },
});

//Actions
export const {
  changeMode,
  fetchColorMode,
  fetchColorModeSuccess,
  fetchColorModeFailed,
} = uiSlice.actions;

//Selectors
export const selectMode = (state: RootState) => state.ui.mode;
export const selectIsLoading = (state: RootState) => state.ui.loading;

//Reducer
const uiReducer = uiSlice.reducer;
export default uiReducer;
