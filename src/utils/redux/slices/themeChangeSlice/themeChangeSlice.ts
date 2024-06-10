import { createSlice } from '@reduxjs/toolkit';
import {THEMES} from '@/utils/themeApply/themeColor'

export interface ThemeState {
  theme: {
    name: string;
    bg: string;
    text: string;
  };
}


const initialState: ThemeState = {
  theme: THEMES.light, // Set the initial theme here
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state,action) => {
      state.theme = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
