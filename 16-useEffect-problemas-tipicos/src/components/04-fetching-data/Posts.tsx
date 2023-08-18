import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Tenemos un router cuyo Home es: http://localhost:5173/
    // Cuando pulsamos en Go to posts vamos a: http://localhost:5173/posts
    // y se ejecuta este componente.
    //
    // El problema aquí se observa cuando se hace lo siguiente:
    // Vamos al Home, es decir, a http://localhost:5173/
    // Vamos al navegador y pulsamos F12 para acceder a la parte de desarrollador.
    // Vamos a Network y seleccionamos Slow 3G
    // Ahora pulsamos en Go to posts, pero rápidamente pulsamos en el botón para retroceder la página.
    // Vemos que, aunque hemos retrocedido, sale el alert y actualiza el state.
    // Pero debería haberse cancelado esta petición inmediatamente tras pulsar el botón retroceder.
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data: Post[]) => {
        alert('posts are ready, updating state!');
        setPosts(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {posts?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
