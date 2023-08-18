import { useEffect, useMemo, useState } from 'react';

interface NameProps {
  name: string;
  selected: boolean;
}

export const PrimVsNonPrim = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState<NameProps>({
    name: '',
    selected: false,
  });

  // Memoizamos lo que necesitamos en el state.
  // Este user solo cambiará si cambian las dependencias indicadas, name o selected
  //
  // const user = useMemo(
  //   () => ({
  //     name: state.name,
  //     selected: state.selected,
  //   }),
  //   [state.name, state.selected]
  // );

  useEffect(
    () => {
      // Problema:
      // Pongo en el input Pepe, pulso Add Name y name indica Pepe --> Se ejecuta este useEffect
      // Pulso el botón Select y selected pasa de false a true --> Se ejecuta este useEffect
      //
      // Pulso de nuevo el botón Select, nada cambia --> Se ejecuta este useEffect!!!!
      // ¿Por qué? No se ha cambiado nada!!
      //
      // Esto ocurre porque hay una diferencia entre tipos de datos primitivos y no primitivos.
      // strings, numbers, booleans, null y undefined son primitivos
      // objetos y arrays son NO primitivos
      //
      // Cuando comparamos tipos de datos primitivos, lo que se compara es EL CONTENIDO.
      // a = Pepe, b = Pepe  --> a === b da como resultado true
      //
      // Cuando comparamos tipos de datos no primitivos, lo que se compara es LA DIRECCIÓN DE MEMORIA
      // x = {name: 'Pepe'}, y = {name: 'Pepe'} --> a === b da como resultado false
      // z = x --> x === a da como resultado true
      // [] === [] da como resultado false
      // [1] === [1] da como resultado false
      //
      // React NO compara arrays de la forma indicada arriba, sino que compara cada elemento que tiene el array.
      // Si en el array de dependencias indicamos primitivos no ocurre nada, pero si indicamos objetos tenemos
      // que tener cuidado.
      //
      //? SOLUCIONES
      //? Hay diferentes soluciones para esto
      //?   1 - Usar el hook useMemo e indicar en las dependencias ese hook. Ahora vemos que si pulsamos más
      //?       de una vez el botón Select, la segunda vez ya no se ejecuta el useEffect.
      //?
      //?   2 - Indicar en las dependencias todos los primitivos de los que consta el objeto.
      console.log('El estado ha cambiado, se ejecuta useEffect');
    },
    /* [user] */ [state.name, state.selected]
  );

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />

      <button onClick={handleAdd}>Add Name</button>
      <br />
      <button onClick={handleSelect}>Select</button>
      <br />

      {`{
          name: ${state.name},
          selected: ${state.selected.toString()}
        }`}
    </div>
  );
};
