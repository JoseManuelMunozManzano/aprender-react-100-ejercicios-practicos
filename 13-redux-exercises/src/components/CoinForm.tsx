import { useDispatch } from 'react-redux';
import { setDollars } from '../store/coin';

const CoinForm = () => {
  const dispatch = useDispatch();

  const onCoinChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => dispatch(setDollars(target.value));

  return (
    <div>
      <h1>De Euros a Dólares</h1>
      <input type="text" onChange={onCoinChange} placeholder="Euros" />
    </div>
  );
};

export default CoinForm;
