import { createSlice } from "@reduxjs/toolkit";

const state = {
  employeePopup: false,
  deletePopup: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState: state,
  reducers: {
    openEmployeePopup: (state, action) => {
      state.employeePopup = action.payload ?? true;
    },
    closeEmployeePopup: (state, action) => {
      state.employeePopup = false;
    },
    openDeletePopup: (state, action) => {
      state.deletePopup = action.payload ?? true;
    },
    closeDeletePopup: (state, action) => {
      state.deletePopup = false;
    },
  },
});

export const {
  openEmployeePopup,
  closeEmployeePopup,
  openDeletePopup,
  closeDeletePopup,
} = popupSlice.actions;
export default popupSlice.reducer;
