import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  word: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeWord(state, action) {
      state.word = action.payload.word;
    },
  },
});

export const {changeWord} = formSlice.actions;
export default formSlice.reducer;
