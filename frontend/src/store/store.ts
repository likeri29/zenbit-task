import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as dealsReducer } from "./deals/deals.slice";

const store = configureStore({
  reducer: {
    deals: dealsReducer,
  },
});

export { store };

const rootReducer = combineReducers({
  deals: dealsReducer,
});

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof rootReducer>;
