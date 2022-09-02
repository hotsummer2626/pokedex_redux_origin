import { SETPOKEMONLIST, SETPOKEMONLISTBYTYPE } from "../constant";

const initialState = { pokemonList: [], displayPokemonList: [] };
export default function pokemonReducer(preState = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case SETPOKEMONLIST:
      return { ...preState, pokemonList: data, displayPokemonList: data };
    case SETPOKEMONLISTBYTYPE:
      return {
        ...preState,
        displayPokemonList:
          data === "All"
            ? preState.pokemonList
            : preState.pokemonList.filter((pokemon) => {
                const typeList = pokemon.types.reduce(
                  (prev, curr) => [...prev, curr.type.name],
                  []
                );
                return typeList.includes(data);
              }),
      };
    default:
      return preState;
  }
}
