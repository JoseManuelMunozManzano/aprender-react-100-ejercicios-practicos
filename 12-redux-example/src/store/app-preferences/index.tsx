// https://redux.js.org/usage/migrating-to-modern-redux#reducers-and-actions-with-createslice
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAppPreferences {
  theme: string;
}

const initialState: IAppPreferences = {
  theme: 'light',
};

const useSlice = createSlice({
  name: 'appPreferences',
  initialState,
  reducers: {
    setAppPreferencesTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setAppPreferencesTheme } = useSlice.actions;

export default useSlice.reducer;
