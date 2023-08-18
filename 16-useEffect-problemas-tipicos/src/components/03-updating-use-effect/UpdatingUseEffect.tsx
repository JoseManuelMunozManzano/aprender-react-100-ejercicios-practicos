import { useEffect, useState } from 'react';

export const UpdatingUseEffect = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    // Este console.log es un bucle infinito.
    console.log('effect');

    // Si ejecutamos este componente en el navegador veremos que pasa algo raro.
    // Ocurre un extraño glitch.

    // Este error ocurre porque number cambia cada segundo y como es nuestra dependencia
    // ejecuta este useEffect sin parar.
    setInterval(() => {
      setNumber(number + 1);
    }, 1000);
  }, [number]);

  return <div>{number}</div>;
};
