import { useMemo, useState } from 'react';

export const ExpensiveWithDependency = () => {
  const [text, setText] = useState<string>('');
  const [number, setNumber] = useState<number>(0);

  const expensiveFunction = (n: number) => {
    let total = 0;
    for (let i = 1; i < n; i++) {
      total += i;
    }

    return total;
  };

  //? useMemo con dependencia
  //? Cuando cambia number se vuelve a ejecutar la función pesada, pero si actualizo el texto, la función pesada
  //? no se recalcula.
  const sum = useMemo(() => expensiveFunction(number), [number]);
  console.log('Componente re-rendered!');

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter a text" />
      <br />
      <input onChange={(e) => setNumber(+e.target.value)} value={number} />
      <br />
      <span>Total: {sum}</span>
    </div>
  );
};
