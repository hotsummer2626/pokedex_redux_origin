import React from "react";
import styles from "./pokemonList.module.scss";
import Card from "./Card/card";
import { connect } from "react-redux";
import Loading from "./Loading";
import {
  addDamageRelationship,
  postPokemonData,
  postPokemonTypeToPokemon,
  postEvolutionChainToPokemon,
} from "../../postBackendData/postData";

const PokemonList = ({ pokemonList }) => {
  // postPokemonData(pokemonList);
  // postPokemonTypeToPokemon(pokemonList);
  // postEvolutionChainToPokemon(pokemonList);
  // console.log(pokemonList);
  return (
    <ul className={styles.container}>
      {pokemonList.length !== 0 ? (
        pokemonList.map((pokemon) => (
          <Card key={pokemon.pokemon.id} pokemon={pokemon.pokemon} />
        ))
      ) : (
        <Loading />
      )}
    </ul>
  );
};

export default connect(
  ({ pokemon }) => ({ pokemonList: pokemon.displayPokemonList }),
  {}
)(PokemonList);
