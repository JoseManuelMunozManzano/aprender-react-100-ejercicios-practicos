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
    //
    //? SOLUCION
    //? En vez de actualizar el state usando la variable del state, debe usarse una función de actualización.
    //? Ahora solo se ejecutará una vez y funcionara CASI perfectamente.
    //
    // Pero esto lleva a un segundo problema!!!
    // Función de limpiado de useEffect
    setInterval(() => {
      // setNumber(number + 1);
      setNumber((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>{number}</div>;
};
