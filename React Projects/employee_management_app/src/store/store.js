import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./slices/popup.slice";
import employeeReducer from "./slices/employee.slice";
import drawerReducer from "./slices/drawer.slice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
    drawer: drawerReducer,
  },
});
