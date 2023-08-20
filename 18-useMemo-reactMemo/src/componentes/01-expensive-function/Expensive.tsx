import { useState } from 'react';

export const Expensive = () => {
  const [text, setText] = useState<string>('');

  const expensiveFunction = () => {
    let total = 0;
    for (let i = 1; i < 100_000_000; i++) {
      total += i;
    }

    return total;
  };

  // Cada vez que actualizo el texto el componente se renderiza.
  // Problema: Como al re-renderizar ejecuta esta función pesada, cada vez que actualizo el texto
  //    hay un delay para mostrar el nuevo texto escrito.
  const sum = expensiveFunction();
  console.log('Componente re-rendered!');

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter a text" />
      <br />
      <span>Total: {sum}</span>
    </div>
  );
};
