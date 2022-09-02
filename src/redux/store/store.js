import { createStore, combineReducers, applyMiddleware } from "redux";
import pokemonReducer from "../reducers/pokemon";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    pokemon: pokemonReducer,
  }),
  applyMiddleware(thunk)
);
