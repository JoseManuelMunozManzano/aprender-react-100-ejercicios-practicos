import { useSelector } from 'react-redux';
import { TState as TStateUser, selectAge, selectUserName } from '../store/user/selector';
import { TState as TStatePreferences, selectAppPreferencesTheme } from '../store/app-preferences/selectors';

const Consumer2 = () => {
  const name = useSelector<TStateUser, string>(selectUserName);
  const age = useSelector<TStateUser, number>(selectAge);
  const theme = useSelector<TStatePreferences, string>(selectAppPreferencesTheme);

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{theme}</p>
    </div>
  );
};

export default Consumer2;
