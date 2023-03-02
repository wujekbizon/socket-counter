import { configureStore } from '@reduxjs/toolkit';
import { modalReducer, openSideMenu, closeSideMenu } from './slices/modalSlice';
import { playerReducer, addLife, subtractLife } from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    player: playerReducer,
  },
});

export const actionCreators = {
  openSideMenu,
  closeSideMenu,
  addLife,
  subtractLife,
};
