import React, { useEffect } from "react";
import "./App.scss";
import PokemonList from "./components/PokemonList/pokemonList";
import PokemonTypeSelectList from "./components/PokemonTypeSelectList/pokemonTypeSelectList";
import { connect } from "react-redux";
import { setPokemonListFromDatabase } from "./redux/actions/pokemon";
import { addDamageRelationship } from "./postBackendData/postData";
import { postTypeData } from "./postBackendData/postData";

const App = ({ setPokemonListFromDatabase }) => {
  useEffect(() => {
    setPokemonListFromDatabase(9);
    // postTypeData()
    // addDamageRelationship()
  });
  return (
    <div className="appWrapper">
      <PokemonTypeSelectList />
      <PokemonList />
    </div>
  );
};

export default connect(() => ({}), {
  setPokemonListFromDatabase,
})(App);
