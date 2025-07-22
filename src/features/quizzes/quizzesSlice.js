import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {quiz} = action.payload;
            const {quizId,topicId,name,cardIds} = quiz;
            const newQuiz = {
                id: quizId,
                topicId,
                name,
                cardIds
            }
            state.quizzes[action.payload.quizId] = newQuiz;
        }
    }
});

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;