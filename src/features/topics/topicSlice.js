import {createslice} from '@reduxjs/toolkit';
import {uuidv4} from 'uuid';

const topicSlice = createslice({
    name: 'topic',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const newId = uuidv4();
            state.topics[newId] = action.payload;
        }
    }
});

export const {addTopic} = topicSlice.actions;
export default commentSlice.reducer;