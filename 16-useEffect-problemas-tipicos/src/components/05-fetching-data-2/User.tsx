import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface UserProps {
  name?: string;
  username?: string;
  email?: string;
}

export const User = () => {
  const [user, setUser] = useState<UserProps>({});
  const id = useLocation().pathname.split('/')[2];

  // Cuando pulsamos en cualquiera de los enlaces de abajo cambia el id y se ejecuta useEffect
  // que actualiza setUser y renderiza la página con la nueva información traída.
  //
  // Problema: No estamos indicando ninguna función de limpieza.
  //
  // Para ver como afecta este problema, de nuevo en las herramientas de desarrollador de Chrome (F12)
  // seleccionar la pestaña Network y poner Slow 3G.
  // Pulsar en el enlace Fetch User 2 y rápidamente en Fetch User 3
  // Veremos que, aunque la url mostrada en la del user/3 la información es la del usuario 2
  //
  // Esto ocurre porque no se ha cancelado la petición de usuario 2 y se ha actualizado el estado.
  //
  //? SOLUCION
  //? Hay más de una solución.
  //?
  //?   1. De nuevo se crea de nueva una función de limpieza y una variable que indica cuando se
  //?     debe o no actualizar el estado.
  //?     Esto se puede hacer si es necesario también en el catch.
  //?
  //?   2. Usar una función limpiadora profesional usando AbortController.
  //?     Nos permite interceptar una petición API y así poder cancelarla cuando queramos.
  //?     Usamos su función signal y la pasamos al método fetch como opción.
  //?     Si queremos cancelar la petición mandamos el signal en la función de limpieza y el método
  //?     fetch será destruido inmediatamente, esto usando el método abort()
  //?     Se lanza un error en consola al abortar, que recogemos en el catch.
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then((res) => res.json())
      .then((data: UserProps) => {
        setUser(data);
      })
      .catch((err: Error) => {
        if (err.name === 'AbortError') {
          console.log('cancelled!');
        } else {
          // todo: manejar error usando un state por ejemplo
        }
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/users/1">Fetch User 1</Link>
      <br />
      <Link to="/users/2">Fetch User 2</Link>
      <br />
      <Link to="/users/3">Fetch User 3</Link>
    </div>
  );
};
