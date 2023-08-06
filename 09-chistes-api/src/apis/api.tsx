import axios, { AxiosResponse } from 'axios';
import { Categories, Joke } from '../interfaces/jokes.interface';

export const getCategories = (): Promise<AxiosResponse<string[], Categories>> =>
  axios.get('https://api.chucknorris.io/jokes/categories');

export const getJokeFromCategory = (category: string): Promise<AxiosResponse<Joke>> =>
  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
