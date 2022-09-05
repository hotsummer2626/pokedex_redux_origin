import React from "react";
import styles from "./pokemonList.module.scss";
import Card from "./Card/card";
import { connect } from "react-redux";
import Loading from "./Loading";

const PokemonList = ({ pokemonList }) => {
  return (
    <ul className={styles.container}>
      {pokemonList.length !== 0 ? (
        pokemonList.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
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
