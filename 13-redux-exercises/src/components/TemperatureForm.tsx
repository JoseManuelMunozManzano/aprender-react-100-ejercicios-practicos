import { useDispatch } from 'react-redux';
import { setFahrenheit } from '../store/temperature';

const TemperatureForm = () => {
  const dispatch = useDispatch();

  const onTemperatureChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setFahrenheit(+target.value));

  return (
    <div>
      <h1>De Grados a Fahrenheit</h1>
      <input type="text" onChange={onTemperatureChange} placeholder="Grados" />
    </div>
  );
};

export default TemperatureForm;
