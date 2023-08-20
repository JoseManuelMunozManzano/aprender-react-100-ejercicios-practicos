export const ExpensiveComponent = () => {
  console.log('Componente pesado renderizado!');

  let total = 0;
  for (let i = 0; i < 100_000_000; i++) {
    total += i;
  }

  return <div>{total}</div>;
};
