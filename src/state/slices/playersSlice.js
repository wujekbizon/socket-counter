import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  players: [
    {
      playerId: nanoid(),
      playerLife: 20,
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
    resetGame(state) {
      state.isGameOver = false;
      const resetPlayers = state.players.map((player) => ({
        ...player,
        playerLife: 20,
      }));

      state.players = resetPlayers;
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
  resetGame,
} = playersSlice.actions;
export const playersReducer = playersSlice.reducer;
