import { IState } from '.';

export type TTemperature = {
  temperature: IState;
};

export const selectTemperature = (state: TTemperature) => state.temperature.fahrenheit;
