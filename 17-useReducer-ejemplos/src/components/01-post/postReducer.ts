export interface PostProps {
  useId?: number;
  id?: number;
  title?: string;
  body?: string;
}

interface PostState {
  loading: boolean;
  post: PostProps;
  error: boolean;
}

type PostAction = { type: 'fetchStart' } | { type: 'fetchSuccess'; payload: PostProps } | { type: 'fetchError' };

// Aquí indicamos todos los estados para no tener que actualizar múltiples estados.
export const INITIAL_STATE: PostState = {
  loading: false,
  post: {},
  error: false,
};

// Creamos la función reducer que toma dos argumentos, el state y la acción a realizar.
// La acción es una función que actualiza el state y devuelve la nueva versión del state.
export const postReducer = (state: PostState = INITIAL_STATE, action: PostAction): PostState => {
  switch (action.type) {
    case 'fetchStart':
      return { ...state, post: {}, loading: true, error: false };

    case 'fetchSuccess':
      // No hace falta indicar error, porque sigue a false
      return { ...state, post: action.payload, loading: false };

    case 'fetchError':
      return { ...state, post: {}, loading: false, error: true };

    default:
      return state;
  }
};
