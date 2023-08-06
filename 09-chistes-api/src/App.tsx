import { useEffect, useState } from 'react';
import { getCategories, getJokeFromCategory } from './apis/api';
import { Joke } from './interfaces/jokes.interface';

function App() {
  const [cats, setCats] = useState<string[]>([]);
  const [currentCat, setCurrentCat] = useState<string>('');
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategories();
      setCats(res.data);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    if (currentCat !== '') {
      const fetchData = async () => {
        const res = await getJokeFromCategory(currentCat);
        setJoke(res.data);
      };

      fetchData().catch(console.error);
    }

    return setCurrentCat('');
  }, [currentCat]);

  return (
    <>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentCat(cat);
              }}
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
      <p>{joke && joke.value}</p>
    </>
  );
}

export default App;
