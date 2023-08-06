// https://redux.js.org/usage/migrating-to-modern-redux#reducers-and-actions-with-createslice
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IState {
  name: string | null;
  age: number | null;
}

const initialState: IState = {
  name: null,
  age: null,
};

const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    setUserAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { setUserName, setUserAge } = useSlice.actions;

export default useSlice.reducer;
