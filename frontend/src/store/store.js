import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import usersReducer from "../api/Users/userSlice";
import homesReducer from "../api/Homes/homeSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    homes: homesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
