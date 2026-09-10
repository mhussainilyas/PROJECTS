import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axiosInstance";

export const getEmployee = createAsyncThunk(
  "employee/getEmployee",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await api.get("employee");
      return response.data;
    } catch (err) {
      return rejectWithValue("Something went wrong!");
    }
  },
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await api.post("employee", payload);
      dispatch(getEmployee());
      return response.data;
    } catch (err) {
      return rejectWithValue("Something went wrong in post method!");
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (payloadID, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await api.delete(`employee/${payloadID}`);
      dispatch(getEmployee());
      return response.data;
    } catch (err) {
      return rejectWithValue("Something went wrong in delete method!");
    }
  },
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (payload, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    const { id, details } = payload;
    try {
      const response = await api.put(`employee/${id}`, details);
      dispatch(getEmployee());
      return response.data;
    } catch (err) {
      return rejectWithValue("Something went wrong in put method!");
    }
  },
);
