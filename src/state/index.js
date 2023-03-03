import { configureStore } from '@reduxjs/toolkit';
import { modalReducer, openSideMenu, closeSideMenu } from './slices/modalSlice';
import {
  playersReducer,
  addLife,
  subtractLife,
  changeName,
  subtractLifeByAmount,
  addLifeByAmount,
  setGameOver,
  resetGame,
  setStartingLife,
} from './slices/playersSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    player: playersReducer,
  },
});

export const actionCreators = {
  openSideMenu,
  closeSideMenu,
  addLife,
  subtractLife,
  changeName,
  subtractLifeByAmount,
  addLifeByAmount,
  setGameOver,
  resetGame,
  setStartingLife,
};
