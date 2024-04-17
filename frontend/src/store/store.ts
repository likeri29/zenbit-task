import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as dealsReducer } from "./deals/deals.slice";
import { reducer as authReducer } from "./auth/user.slice";

const store = configureStore({
  reducer: {
    deals: dealsReducer,
    auth: authReducer,
  },
});

export { store };

const rootReducer = combineReducers({
  deals: dealsReducer,
  auth: authReducer,
});

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof rootReducer>;
