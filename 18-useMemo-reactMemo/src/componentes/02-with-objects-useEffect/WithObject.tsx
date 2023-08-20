import { useEffect, useMemo, useState } from 'react';

interface UserType {
  underAge: boolean;
  citizen: boolean;
}

export const WithObject = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [country, setCountry] = useState<string>('');

  // PROBLEMA:
  // Este calculo no es pesado, por lo que en principio no haría falta useMemo y todo está bien.
  // Además userType depende de dos estados, por lo que se va a actualizar muy a menudo.
  //
  // El problema es que userType es un objeto, y aquí enlazamos con el proyecto 16-useEffect-problemas-tipicos
  // cuando hablábamos sobre la diferencia entre primitivos y no primitivos.
  // Cuando se renderiza el componente, este objeto no será el mismo que en la renderización anterior.
  //
  // Esto significa que, incluso aunque cambie name, y userType NO TIENE NADA QUE VER CON NAME, se va a volver
  // a renderizar porque la dirección de memoria de userType entre renderizados cambia porque userType se vuelve
  // a asignar!!
  //
  //? SOLUCION
  //? Usar useMemo e indicar las dependencias.
  //? Ahora solo se ejecutará userType cuando cambien age o country.
  //? RECORDAR: objetos y arrays (no primitivos) que necesitan usarse como dependecia en un useEffect, pueden
  //? envolverse con el hook useMemo.
  //?
  // const userType = useMemo(
  //   () => ({
  //     underAge: age! < 18,
  //     citizen: country === 'USA',
  //   }),
  //   [age, country]
  // );

  // useEffect(() => {
  //   console.count('userType ha cambiado!');
  // }, [userType]);

  //? SOLUCION 2 EVITANDO useMemo
  //? Cambiamos la dependencia de useEffect usando cada propiedad del objeto que cambia, en vez del objeto en si.
  const userType: UserType = {
    underAge: age! < 18,
    citizen: country === 'USA',
  };

  useEffect(() => {
    console.count('userType ha cambiado!');
  }, [userType.underAge, userType.citizen]);

  console.log('Componente renderizado!');

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
      <br />
      <input onChange={(e) => setAge(+e.target.value)} placeholder="age" type="number" />
      <br />
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="USA">USA</option>
        <option value="USA">COL</option>
        <option value="USA">ESP</option>
      </select>
    </div>
  );
};
