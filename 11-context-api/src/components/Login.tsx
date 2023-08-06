import { useContext, useRef } from 'react';
import { AppContext } from '../application/Provider';

export const Login = () => {
  const nom = useRef<HTMLInputElement>(null);
  const [state, setState] = useContext(AppContext);

  return (
    <input
      type="text"
      ref={nom}
      onChange={() => {
        setState({ ...state, name: nom.current!.value });
      }}
    />
  );
};

export default Login;
