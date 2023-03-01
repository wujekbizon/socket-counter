import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSideMenu(state) {
      state.isMenuOpen = true;
    },
    closeSideMenu(state) {
      state.isMenuOpen = false;
    },
  },
});

export const { openSideMenu, closeSideMenu } = modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;
