import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  players: [
    {
      playerId: nanoid(),
      playerLife: 10,
      playerName: 'DefaultPlayer',
    },
  ],
  isGameOver: false,
};

const playersSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setGameOver(state, { payload }) {
      const foundPlayer = state.players.find(
        (player) => player.playerId === payload.id
      );
      foundPlayer.playerLife = 0;
      state.isGameOver = true;
    },
    subtractLife(state, { payload }) {
      const foundPlayer = state.players.find(
        (player) => player.playerId === payload.id
      );
      foundPlayer.playerLife =
        foundPlayer.playerLife <= 0 ? 0 : foundPlayer.playerLife - 1;
    },
    subtractLifeByAmount(state, { payload }) {
      const foundPlayer = state.players.find(
        (player) => player.playerId === payload.id
      );

      foundPlayer.playerLife =
        foundPlayer.playerLife <= 0
          ? 0
          : foundPlayer.playerLife - payload.amount;
    },
    addLife(state, { payload }) {
      const foundPlayer = state.players.find(
        (player) => player.playerId === payload.id
      );
      foundPlayer.playerLife = foundPlayer.playerLife + 1;
    },
    addLifeByAmount(state, { payload }) {
      const foundPlayer = state.players.find(
        (player) => player.playerId === payload.id
      );

      foundPlayer.playerLife = foundPlayer.playerLife + payload.amount;
    },

    changeName(state, { payload }) {
      const foundPlayer = state.players.find(
        (player) => player.playerId === payload.id
      );
      foundPlayer.playerName = payload.name;
    },
  },
});

export const {
  subtractLife,
  addLife,
  changeName,
  subtractLifeByAmount,
  addLifeByAmount,
  setGameOver,
} = playersSlice.actions;
export const playersReducer = playersSlice.reducer;
