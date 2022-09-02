import React, { useEffect } from "react";
import "./App.scss";
import PokemonTypeList from "./components/PokemonTypeList/pokemonTypeList";
import PokemonList from "./components/PokemonList/pokemonList";
import PokemonTypeSelectList from "./components/PokemonTypeSelectList/pokemonTypeSelectList";
import { connect } from "react-redux";
import { setPokemonListFromDatabase } from "./redux/actions/pokemon";

const App = ({ setPokemonListFromDatabase }) => {
  useEffect(() => {
    setPokemonListFromDatabase(18);
  });
  return (
    <div className="appWrapper">
      <PokemonTypeSelectList />
      {/* <PokemonTypeList /> */}
      <PokemonList />
    </div>
  );
};

export default connect(() => ({}), {
  setPokemonListFromDatabase,
})(App);
