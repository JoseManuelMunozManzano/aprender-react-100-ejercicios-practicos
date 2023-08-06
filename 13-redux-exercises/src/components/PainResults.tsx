import { useSelector } from 'react-redux';
import { selectTemperature } from '../store/temperature/selector';
import { selectCoin } from '../store/coin/selector';
import { selectArea } from '../store/area/selector';

const PaintResults = () => {
  const fahrenheit = useSelector(selectTemperature);
  const dollars = useSelector(selectCoin);
  const area = useSelector(selectArea);

  return (
    <div>
      <h1>RESULTADOS</h1>
      <p>Fahrenheit: {fahrenheit}</p>
      <p>Dólares: {dollars}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default PaintResults;
