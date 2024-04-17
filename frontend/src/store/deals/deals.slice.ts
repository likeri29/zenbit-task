import { createSlice } from "@reduxjs/toolkit";
import { getDeals } from "./actions";

type Deal = {
  id: string;
  name: string;
  price: number;
  yield: string;
  sold: number;
  ticket_price: number;
  days_left: number;
  image: string;
};

type InitialState = {
  isLoading: boolean;
  deals: Deal[];
};

const initialState: InitialState = {
  isLoading: false,
  deals: [],
};

const { reducer, actions, name } = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeals.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.deals = payload);
      })
      .addCase(getDeals.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { actions, name, reducer };
