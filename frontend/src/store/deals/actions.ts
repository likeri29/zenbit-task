import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../helpers/helpers";
import { ActionType } from "./common";

export const getDeals = createAsyncThunk(
  ActionType.GET_DEALS,
  async (_deal, thunkAPI) => {
    try {
      const URL = "deals";
      const response = await customFetch.get(URL);
      console.log(response);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
