import { useMemo, useState } from 'react';

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
  //
  //? SOLUCION:
  //? No tiene sentido, en cada renderizado, volver a llamar a esa función tan pesada, porque el resultado
  //? de la función no va a cambiar nunca.
  //? Es en estos escenarios donde tiene todo el sentido usar el hook useMemo.
  //? useMemo toma como argumentos un callback y un array de dependencias donde indicamos lo que cambia para
  //? que vuelva a ejecutarse la función pensada. En este caso, como el total devuelto no cambia nuca, está
  //? vacío.
  //?
  //? Tras este cambio, si ejecutamos de nuevo la app, veremos que ya no existe ese delay al actualizar
  //? la caja de texto.
  const sum = useMemo(() => expensiveFunction(), []);
  console.log('Componente re-rendered!');

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter a text" />
      <br />
      <span>Total: {sum}</span>
    </div>
  );
};
