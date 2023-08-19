export type Tag = string;

export interface ProductState {
  title: string;
  desc: string;
  price: number;
  category: string;
  tags?: Tag[];
  images: {
    sm: string;
    md: string;
    lg: string;
  };
  quantity: number;
}

interface Payload {
  name: string;
  value: string;
}

type FormAction =
  | { type: 'changeInput'; payload: Payload }
  | { type: 'addTag'; payload: Tag }
  | { type: 'removeTag'; payload: Tag }
  | { type: 'increase' }
  | { type: 'decrease' };

export const INITIAL_STATE: ProductState = {
  title: '',
  desc: '',
  price: 0,
  category: '',
  tags: [],
  images: {
    sm: '',
    md: '',
    lg: '',
  },
  quantity: 0,
};

export const formReducer = (state: ProductState = INITIAL_STATE, action: FormAction): ProductState => {
  switch (action.type) {
    case 'changeInput':
      return { ...state, [action.payload.name]: action.payload.value };

    case 'addTag':
      return { ...state, tags: [...state.tags!, action.payload] };

    case 'removeTag':
      return { ...state, tags: state.tags?.filter((tag) => tag !== action.payload) };

    case 'increase':
      return { ...state, quantity: state.quantity + 1 };

    case 'decrease':
      return { ...state, quantity: state.quantity - 1 };

    default:
      return state;
  }
};
