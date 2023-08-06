import axios, { AxiosResponse } from 'axios';
import { IPeople, Result } from '../interfaces/star-wars.interface';

const instance = axios.create({ baseURL: 'https://swapi.dev./api' });

export const getPeople = (page = 1): Promise<AxiosResponse<IPeople, Result>> => instance.get(`/people/?page=${page}`);

export const getCharacterById = (id: string): Promise<AxiosResponse<Result, IPeople>> => instance.get(`/people/${id}`);
