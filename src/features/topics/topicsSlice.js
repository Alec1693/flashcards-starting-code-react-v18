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
        }
    }
});

export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;