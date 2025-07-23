import {createSlice} from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {newId, name, icon} = action.payload;
            state.topics[newId] = {id: newId, name, icon, quizIds: []}
        },
        addQuizId: (state, action) => {
            const {quizId,topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const {addTopic,addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;