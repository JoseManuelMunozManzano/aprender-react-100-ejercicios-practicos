import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IState {
  fahrenheit: number | null;
}

const initialState: IState = {
  fahrenheit: null,
};

const useSlice = createSlice({
  name: 'grades',
  initialState,
  reducers: {
    setFahrenheit: (state, action: PayloadAction<number>) => {
      state.fahrenheit = (action.payload * 9) / 5 + 32;
    },
  },
});

export const { setFahrenheit } = useSlice.actions;

export default useSlice.reducer;
