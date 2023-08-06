import { IAppPreferences } from './index';

export type TState = {
  appPreferences: IAppPreferences;
};

export const selectAppPreferencesTheme = (state: TState) => state.appPreferences.theme;
