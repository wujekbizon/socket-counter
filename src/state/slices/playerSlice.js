import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startingLife: 20,
  playerName: 'Player',
  playerLife: 20,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    subtractLife(state) {
      state.playerLife = state.playerLife - 1;
    },
    addLife(state) {
      state.playerLife = state.playerLife + 1;
    },
  },
});

export const { subtractLife, addLife } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
