import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTokenFromLocalStorage,
  getTokenFromLocalStorage,
} from "../../helpers/helpers";
import { loginUser, registerUser, logout } from "./actions";

const initialState = {
  isLoading: false,
  user: null,
  accessToken: getTokenFromLocalStorage(),
};

const { reducer, actions, name } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.accessToken = payload.accessToken;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.accessToken = null;
        deleteTokenFromLocalStorage();
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { actions, name, reducer };
