import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../toolkite/reducer/reducer";

const store = configureStore({
  reducer: { todoSlice },
});
export default store;
