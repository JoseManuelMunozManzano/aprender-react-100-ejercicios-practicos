import { useEffect, useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.count('useEffect ejecutándose!');
    // Si pulsamos muy rápido el botón Incrementar vemos que hay un delay entre
    // el texto del span y el título de la página web.
    // Esto ocurre porque useEffect se ejecuta tras renderizar el componente.
    // Es decir, ejecuta todo lo que hay debajo de este useEffect y solo tras eso
    // se ejecuta este useEffect.
    //
    // Hay un problema aquí porque useEffect se ejecuta en cada renderizado, incluso
    // aunque lo que se actualiza no tenga nada que ver con number.
    document.title = `Has pulsado ${number} veces`;
  });

  console.count('componente renderizado!');

  return (
    <div>
      <span>Has pulsado {number} veces</span>
      <br />
      <button onClick={() => setNumber((prev) => prev + 1)}>INCREMENTAR</button>
    </div>
  );
};
