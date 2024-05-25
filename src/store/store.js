import { configureStore } from "@reduxjs/toolkit";
import crud from "./slices/crud";

const store = configureStore({
  reducer: { crud },
});
export default store;
