import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPayload {
  height: number;
  width: number;
}

export interface IState {
  area: number | null;
}

const initialState: IState = {
  area: null,
};

const useSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setArea: (state, action: PayloadAction<IPayload>) => {
      state.area = action.payload.height * action.payload.width;
    },
  },
});

export const { setArea } = useSlice.actions;

export default useSlice.reducer;
