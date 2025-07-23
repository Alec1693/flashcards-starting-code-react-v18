import {createSlice} from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCards: (state, action) => {
            //card properties: id, front, back
            const {id, front, back} = action.payload;
            state.cards[id] = {id,front,back};
        }
    }
});

export const {addCards} = cardsSlice.actions;
export default cardsSlice.reducer;