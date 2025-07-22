import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice";

const store = configureStore({
  reducer: {
    topics: topicsReducer
  },
});

export default store;