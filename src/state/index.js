import { configureStore } from '@reduxjs/toolkit';
import { modalReducer, openSideMenu, closeSideMenu } from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export const actionCreators = {
  openSideMenu,
  closeSideMenu,
};
