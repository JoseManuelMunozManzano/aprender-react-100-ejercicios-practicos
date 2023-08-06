import { IState } from '.';

export type TArea = {
  area: IState;
};

export const selectArea = (state: TArea) => state.area.area;
