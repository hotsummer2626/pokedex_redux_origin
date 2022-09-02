import React, { useEffect } from "react";
import "./App.scss";
import PokemonTypeList from "./components/PokemonTypeList/pokemonTypeList";
import PokemonList from "./components/PokemonList/pokemonList";
import { connect } from "react-redux";
import { setPokemonListFromDatabase } from "./redux/actions/pokemon";

const App = ({ setPokemonListFromDatabase }) => {
  useEffect(() => {
    setPokemonListFromDatabase(6);
  });
  return (
    <div className="appWrapper">
      <PokemonTypeList />
      <PokemonList />
    </div>
  );
};

export default connect(() => ({}), {
  setPokemonListFromDatabase,
})(App);
