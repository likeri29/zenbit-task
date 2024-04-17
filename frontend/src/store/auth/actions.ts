import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";
import {
  addTokenToLocalStorage,
  deleteTokenFromLocalStorage,
  customFetch,
} from "../../helpers/helpers";

export const registerUser = createAsyncThunk(
  ActionType.SIGN_UP,
  async (user: object, thunkAPI) => {
    try {
      const response = await customFetch.post("/users", user);
      addTokenToLocalStorage(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  ActionType.SIGN_IN,
  async (user: object, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/login", user);
      addTokenToLocalStorage(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  ActionType.LOGOUT,
  async (_, thunkAPI) => {
    try {
      deleteTokenFromLocalStorage();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
