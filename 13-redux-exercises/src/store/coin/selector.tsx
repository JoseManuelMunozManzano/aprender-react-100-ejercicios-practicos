import { IState } from '.';

export type TCoin = {
  coin: IState;
};

export const selectCoin = (state: TCoin) => state.coin.dollars;
