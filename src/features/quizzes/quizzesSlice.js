import { createSlice } from "@reduxjs/toolkit";
import {uuidv4} from 'uuid';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const newId = uuidv4();
            state.topics[newId] = action.payload;
        }
    }
});

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;