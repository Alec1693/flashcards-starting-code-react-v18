import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";

const store = configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer
  },
});

export default store;