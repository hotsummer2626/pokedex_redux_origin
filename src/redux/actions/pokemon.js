import { SETPOKEMONLIST, SETPOKEMONLISTBYTYPE } from "../constant";
import { getPokemon, getPokemonSpecies } from "../../api/apis";

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
        let pokemon = await getPokemon(i + 1);
        let pokemonSpecies = await getPokemonSpecies(i + 1);
        pokemonArr = [...pokemonArr, { pokemon, pokemonSpecies }];
      }
      pokemonArr.map((pokemon) => {
        const { pokemon: pokemonItem } = pokemon;
        pokemonItem.name =
          pokemonItem.name[0].toUpperCase() + pokemonItem.name.slice(1);
        return pokemon;
      });
      dispatch(setPokemonList(pokemonArr));
    })();
  };
};
