import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loaderSlice";
import usersReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    loader: loadersReducer,
    user: usersReducer,
    movies: moviesReducer,
  },
});

export default store;
