import { useReducer } from 'react';
import { INITIAL_STATE, PostProps, postReducer } from './postReducer';

export const Post = () => {
  // To-do funciona correctamente, pero tenemos 6 setStates en una función.
  // Cuando en una función dos o más estados cambian juntos, es mejor usar useReducer.
  //
  //? Usando useReducer: eliminamos los states y sus setStates de la función y creamos un nuevo fichero.
  //? Abajo, en el jsx devuelto, añadimos el state antes de cada propiedad.

  //? Aquí state es el estado y dispatch es una función que nos permite mandar acciones al reducer.
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: 'fetchStart' });

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json();
      })
      .then((data: PostProps) => {
        dispatch({ type: 'fetchSuccess', payload: data });
      })
      .catch(() => {
        dispatch({ type: 'fetchError' });
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>{state.loading ? 'Wait' : 'Fetch the post'}</button>
      <p>{state.post?.title}</p>
      <span>{state.error && 'Something went wrong!'}</span>
    </div>
  );
};
