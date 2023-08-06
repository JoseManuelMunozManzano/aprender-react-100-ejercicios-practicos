import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';
import temperature from './temperature';
import coin from './coin';
import area from './area';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const store = configureStore({ reducer: { temperature, coin, area } });

const Provider = ({ children }: Props) => <ReduxProvider store={store}>{children}</ReduxProvider>;

export { Provider, useSelector, useDispatch };
