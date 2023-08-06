import { createSlice } from '@reduxjs/toolkit';

export interface IState {
  dollars: number | null;
}

const initialState: IState = {
  dollars: null,
};

const useSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setDollars: (state, action) => {
      state.dollars = action.payload * 2;
    },
  },
});

export const { setDollars } = useSlice.actions;

export default useSlice.reducer;
