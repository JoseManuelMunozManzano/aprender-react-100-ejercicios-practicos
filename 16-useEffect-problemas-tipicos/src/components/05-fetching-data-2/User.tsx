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
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data: UserProps) => {
        setUser(data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/users/1">Fetch User1</Link>
      <br />
      <Link to="/users/2">Fetch User2</Link>
      <br />
      <Link to="/users/3">Fetch User3</Link>
    </div>
  );
};
