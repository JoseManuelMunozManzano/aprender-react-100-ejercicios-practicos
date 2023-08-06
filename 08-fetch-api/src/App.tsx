import { useEffect, useState } from 'react';
import axios from 'axios';

import { IPokemon } from './interfaces/pokemon.interface';

const url = 'http://pokeapi.co/api/v2/pokemon/pikachu';

function App() {
  const [nameFetch, setNameFetch] = useState<string>();
  const [heightAxios, setheightAxios] = useState<number>();

  // Usando fetch API
  const requestFetch = async (url: string): Promise<IPokemon> => {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res as IPokemon);
  };

  // Usando Axios
  const requestAxios = async (url: string): Promise<IPokemon> => {
    return axios.get(url).then((res) => res.data as IPokemon);
  };

  useEffect(() => {
    // Usando fetch API
    const fetchName = async () => {
      await requestFetch(url).then((data) => setNameFetch(data.name));
    };
    fetchName().catch(console.error);

    // Usando Axios
    const fetchAxios = async () => {
      await requestAxios(url).then((data) => setheightAxios(data.height));
    };

    fetchAxios().catch(console.error);
  }, []);

  return (
    <>
      {nameFetch} - {heightAxios}
    </>
  );
}

export default App;
