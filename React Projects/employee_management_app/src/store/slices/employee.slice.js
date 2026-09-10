import { createSlice } from "@reduxjs/toolkit";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "../thunks/employee.thunk";

const state = {
  employee: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: state,
  reducers: {},
  extraReducers: (builder) => {
    //   *** GET Employee ***
    builder.addCase(getEmployee.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
      state.loading = false;
    });
    builder.addCase(getEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    //   *** POST Employee ***
    builder.addCase(createEmployee.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createEmployee.fulfilled, (state, _) => {
      state.loading = false;
    });
    builder.addCase(createEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    //   *** DELETE Employee ***
    builder.addCase(deleteEmployee.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, _) => {
      state.loading = false;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    //   *** UPDATE Employee ***
    builder.addCase(updateEmployee.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateEmployee.fulfilled, (state, _) => {
      state.loading = false;
    });
    builder.addCase(updateEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
