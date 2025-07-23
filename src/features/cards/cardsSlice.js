import {createSlice} from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        topics: {}
    },
    reducers: {
        addCards: (state, action) => {
            //card properties: id, front, back
            const {newId, name, icon} = action.payload;
            state.topics[newId] = {id: newId, name, icon, quizIds: []}
        }
    }
});

export const {addCards} = cardsSlice.actions;
export default cardsSlice.reducer;