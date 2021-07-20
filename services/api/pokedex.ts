import axios, { AxiosResponse } from 'axios';
import { listPokemon } from '../../interfaces/';
const publicApi = process.env.NEXT_PUBLIC_PUBLIC_API;

const getAllPokemons = ({ offset = 0, limit = 20 }): Promise<AxiosResponse<listPokemon>> => {
    return axios.get(`${publicApi}pokemon/?offset=${offset}&limit=${limit}`);
};

const getPokemon = (id): Promise<AxiosResponse<any>> => {
    return axios.get(`${publicApi}pokemon/${id}`);
};

export { getAllPokemons, getPokemon };
