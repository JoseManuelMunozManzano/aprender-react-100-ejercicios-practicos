import { useEffect, useState } from 'react';

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

  useEffect(() => {
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
    console.log('El estado ha cambiado, se ejecuta useEffect');
  }, [state]);

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
