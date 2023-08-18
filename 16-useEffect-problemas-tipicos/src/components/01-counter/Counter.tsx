import { useEffect, useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.count('Segundo useEffect ejecutándose');
    setName('Pepe');
    // Indicando un array vacío indicamos que no tenemos dependencias y solo se ejecuta
    // cuando se renderiza por primera vez el componente.
  }, []);

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
    //
    // Con el nuevo useState creado, name, aunque no tiene nada que ver con number,
    // fuerza la renderización y la ejecución de este useEffect.
    //
    //? SOLUCIÓN: indicar dependencias
    // Ahora solo se ejecuta este useEffect tras tocar el botón Incrementar, no tras
    // cambiar el nombre.
    document.title = `Has pulsado ${number} veces`;
  }, [number]);

  console.count('componente renderizado!');

  return (
    <div>
      <span>Has pulsado {number} veces</span>
      <br />
      <button onClick={() => setNumber((prev) => prev + 1)}>INCREMENTAR</button>
      <br />
      <br />
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  );
};
