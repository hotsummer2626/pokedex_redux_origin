import axios from "axios";
import { TYPEICON, TYPECOLOR } from "../constant/constant";
import { getType, getPokemonSpecies, getEvaluationChain } from "../api/apis";

export const postTypeData = async () => {
  const post = (typeData) => {
    axios.post("http://localhost:3001/api/types", { ...typeData });
  };
  const typeList = [];
  for (let i = 1; i <= 18; i += 1) {
    let type = await getType(i);
    typeList.push(type);
  }
  typeList.forEach((type) => {
    post({
      name: type.name,
      imgSrc: TYPEICON.filter((icon) => icon.text === type.name)[0].src,
      color: TYPECOLOR[type.name],
      doubleFrom: type.double_damage_from,
      doubleTo: type.double_damage_to,
      halfFrom: type.half_damage_from,
      halfTo: type.half_damage_to,
      noFrom: type.no_damage_from,
      noTo: type.no_damage_to,
    });
  });
};

export const addDamageRelationship = async () => {
  const post = (type) => {
    axios.put(`http://localhost:3001/api/types/${type.name}`, { ...type });
  };
  const typeList = [];
  for (let i = 1; i <= 18; i += 1) {
    let type = await getType(i);
    typeList.push(type);
  }
  typeList.forEach((type) => {
    const { damage_relations } = type;
    post({
      name: type.name,
      doubleFrom: damage_relations.double_damage_from,
      doubleTo: damage_relations.double_damage_to,
      halfFrom: damage_relations.half_damage_from,
      halfTo: damage_relations.half_damage_to,
      noFrom: damage_relations.no_damage_from,
      noTo: damage_relations.no_damage_to,
    });
  });
};

export const postPokemonData = (pokemonList) => {
  const post = (pokemon) => {
    axios.post("http://localhost:3001/api/pokemons", { ...pokemon });
  };
  pokemonList.forEach((pokemon) => {
    const abilities = pokemon.pokemon.abilities.reduce(
      (prev, curr) => [...prev, curr.ability.name],
      []
    );
    const base_stats = pokemon.pokemon.stats.reduce(
      (prev, curr) => [
        ...prev,
        { name: curr.stat.name, value: curr.base_stat },
      ],
      []
    );
    const egg_groups = pokemon.pokemonSpecies.egg_groups.reduce(
      (prev, curr) => [...prev, curr.name],
      []
    );
    post({
      name: pokemon.pokemon.name.toLowerCase(),
      imgSrc: pokemon.pokemon.sprites.other["official-artwork"].front_default,
      order: pokemon.pokemon.id,
      weight: pokemon.pokemon.weight,
      height: pokemon.pokemon.height,
      shape: pokemon.pokemonSpecies.shape.name,
      growth_rate: pokemon.pokemonSpecies.growth_rate.name,
      habitat: pokemon.pokemonSpecies.habitat.name,
      abilities,
      egg_groups,
      base_stats,
    });
  });
};

export const postPokemonTypeToPokemon = (pokemonList) => {
  const post = ({ typeSlot, typeName, pokemonName }) => {
    axios.post(
      `http://localhost:3001/api/types/${typeName}/pokemons/${pokemonName.toLowerCase()}`,
      { typeSlot }
    );
  };
  pokemonList.forEach((pokemon) => {
    const typeList = pokemon.pokemon.types.reduce(
      (prev, curr) => [...prev, { slot: curr.slot, name: curr.type.name }],
      []
    );
    typeList.forEach((type) => {
      post({
        typeSlot: type.slot,
        typeName: type.name,
        pokemonName: pokemon.pokemon.name,
      });
    });
  });
};

export const postEvolutionChainToPokemon = async (pokemonList) => {
  const post = (data) => {
    axios.put(`http://localhost:3001/api/pokemons/${data.name}`, {
      evolutionChain: data.evolutionChain,
    });
  };
  for (let i = 0; i < pokemonList.length; i += 1) {
    const species = await getPokemonSpecies(pokemonList[i].pokemon.id);
    const chain = await getEvaluationChain(species.evolution_chain.url);
    const evolutionChain = [];
    const extractData = (data) => {
      evolutionChain.push(data.species.name);
      if (data.evolves_to.length === 0) {
        return;
      }
      extractData(data.evolves_to[0]);
    };
    extractData(chain.chain);
    post({
      name: pokemonList[i].pokemon.name.toLowerCase(),
      evolutionChain,
    });
  }
};
