import axios from "axios";

export const getPokemon = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getPokemonSpecies = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getType = (id) => {
  const url = `https://pokeapi.co/api/v2/type/${id}`;
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getEvaluationChain = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
