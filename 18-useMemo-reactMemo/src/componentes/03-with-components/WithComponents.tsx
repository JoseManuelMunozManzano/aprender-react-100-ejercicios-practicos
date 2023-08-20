import { useState } from 'react';
import { ExpensiveComponent } from './ExpensiveComponent';

export const WithComponents = () => {
  const [text, setText] = useState<string>('');

  console.log('Componente renderizado');

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter a text" />
      {/* PROBLEMA:
      No deberíamos llamar a este componente si no es necesario porque es muy pesado y causa delay
      cuando actualizamos el input.
      Pero ya sabemos que cuando se renderiza el padre también se renderiza el hijo, así que cuando
      actualizamos el input se renderiza este componente y el componente pesado. */}
      <ExpensiveComponent />
    </div>
  );
};
