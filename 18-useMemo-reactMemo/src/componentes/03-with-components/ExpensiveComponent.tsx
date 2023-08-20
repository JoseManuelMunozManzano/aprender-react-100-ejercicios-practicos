import React from 'react';

//? SOLUCION:
//? Usar React.Memo para memoizar el componente y que no se re-renderize si no es necesario.
export const ExpensiveComponent = React.memo(() => {
  console.log('Componente pesado renderizado!');

  let total = 0;
  for (let i = 0; i < 100_000_000; i++) {
    total += i;
  }

  return <div>{total}</div>;
});
