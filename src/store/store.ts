import { configureStore } from "@reduxjs/toolkit";
import movieApiReducer from "./movies/slice";

const store = configureStore({
  reducer: movieApiReducer,
});

export { store };
