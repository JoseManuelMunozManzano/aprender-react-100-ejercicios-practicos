import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';
import user from './user';
import appPreferences from './app-preferences';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const store = configureStore({ reducer: { user, appPreferences } });

const Provider = ({ children }: Props) => <ReduxProvider store={store}>{children}</ReduxProvider>;

export { Provider, useSelector, useDispatch };
