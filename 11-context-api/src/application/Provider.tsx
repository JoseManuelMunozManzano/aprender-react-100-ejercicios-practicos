import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MyProvider = ({ children }: Props) => {
  const [state, setState] = useState<ILogin>({ name: '' });

  return (
    <div>
      <AppContext.Provider value={[state, setState]}>{children}</AppContext.Provider>
    </div>
  );
};

interface ILogin {
  name: string;
}

export type AppContextProps = [state: ILogin, setState: Dispatch<SetStateAction<ILogin>>];

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default MyProvider;
