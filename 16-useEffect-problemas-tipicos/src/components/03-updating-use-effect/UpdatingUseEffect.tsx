import { useEffect, useState } from 'react';

export const UpdatingUseEffect = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
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
    // Hemos añadido un console.log y un texto en el div al lado de {number}
    // Ahora vemos en el navegador como el contador se comporta de una forma muy extraña.
    // Cada vez que añado más texto en el div al lado de {number} se vuelve peor el problema.
    setInterval(() => {
      console.log('effect');
      setNumber((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>{number}aaabbbbb</div>;
};
