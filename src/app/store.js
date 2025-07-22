import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicSlice from "../features/topics/topicSlice";

const store = configureStore({
  reducer: {
    topics: topicSlice
  },
});

export default store;