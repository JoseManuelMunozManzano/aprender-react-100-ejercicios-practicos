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
