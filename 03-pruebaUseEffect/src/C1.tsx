import { useEffect } from 'react';

export const C1 = () => {
  useEffect(() => {
    console.log('Este código se ejecutará cada vez que el componente se monte.');

    return () => {
      console.log('Este mensaje se ejecutará cada vez que el componente se desmonte.');
    };
  }, []);

  return <div>C1</div>;
};
