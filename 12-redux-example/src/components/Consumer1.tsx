import { useDispatch } from 'react-redux';
import { setUserName, setUserAge } from '../store/user';
import { setAppPreferencesTheme } from '../store/app-preferences';

const Consumer1 = () => {
  const dispatch = useDispatch();

  const onNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => dispatch(setUserName(target.value));
  const onAgeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => dispatch(setUserAge(+target.value));
  const onThemeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setAppPreferencesTheme(target.value));

  return (
    <div>
      <p>
        <input type="text" onChange={onNameChange} placeholder="Name" />
        <input type="number" onChange={onAgeChange} placeholder="Age" />
        <input type="string" onChange={onThemeChange} placeholder="Theme" />
      </p>
    </div>
  );
};

export default Consumer1;
