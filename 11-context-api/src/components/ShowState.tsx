import { useContext } from 'react';
import { AppContext } from '../application/Provider';

const ShowState = () => {
  const [state] = useContext(AppContext);

  return <p>{state.name}</p>;
};

export default ShowState;
