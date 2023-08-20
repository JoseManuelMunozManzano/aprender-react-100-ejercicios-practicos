import { useState } from 'react';
import { ExpensiveComponent } from './ExpensiveComponent';

export const WithComponents = () => {
  console.log('Componente renderizado');

  return (
    <div>
      {/* PROBLEMA:
      No deberíamos llamar a este componente si no es necesario porque es muy pesado y causa delay
      cuando actualizamos el input.
      Pero ya sabemos que cuando se renderiza el padre también se renderiza el hijo, así que cuando
      actualizamos el input se renderiza este componente y el componente pesado. */}
      <Form />
      <ExpensiveComponent />
    </div>
  );
};

//? SOLUCION 2:
//? Como el uso de memoization también conlleva un coste, debería usarse solo lo imprescindible.
//? En este ejemplo, vamos a solucionar este problema separando componentes y actualizando aquí
//? el state.
//? Ahora cuando se actualiza el input, al estar separado en otro componente, solo afecta a este
//? componente.
//?
//? ¿Pero qué ocurre si necesitamos usar este state en el componente padre?
const Form = () => {
  const [text, setText] = useState<string>('');

  return <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter a text" />;
};
