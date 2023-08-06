import { IState } from './index';

export type TState = {
  user: IState;
};

export const selectUserName = (state: TState): string => state.user.name!;

export const selectAge = (state: TState): number => state.user.age!;
