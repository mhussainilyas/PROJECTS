import { createSlice } from "@reduxjs/toolkit";

const state = {
  isActive: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState: state,
  reducers: {
    openDrawer: (state, _) => {
      state.isActive = true;
    },
    closeDrawer: (state, _) => {
      state.isActive = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
