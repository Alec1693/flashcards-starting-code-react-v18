import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            console.log('hit')
            const {quizId,topicId,name,cardIds} = action.payload;
            state.quizzes[quizId] = {id:quizId,topicId,name,cardIds};
        }
    }
});

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;