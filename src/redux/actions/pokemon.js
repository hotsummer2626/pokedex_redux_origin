import { SETPOKEMONLIST, SETPOKEMONLISTBYTYPE } from "../constant";
import { getPokemon } from "../../api/apis";

export const setPokemonList = (data) => ({ type: SETPOKEMONLIST, data });
export const setPokemonListByType = (data) => ({
  type: SETPOKEMONLISTBYTYPE,
  data,
});

export const setPokemonListFromDatabase = (dataLength) => {
  return (dispatch) => {
    (async () => {
      let pokemonArr = [];
      for (let i = 0; i < dataLength; i += 1) {
        pokemonArr = [...pokemonArr, await getPokemon(i + 1)];
      }
      pokemonArr.map((pokemon) => {
        pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        return pokemon;
      });
      dispatch(setPokemonList(pokemonArr));
    })();
  };
};
