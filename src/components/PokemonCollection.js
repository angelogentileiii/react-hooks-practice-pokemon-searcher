import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {

  const listOfPokemon = pokemonData.map((pokemon) => {
    const {id} = pokemon;
    return <PokemonCard key={id} pokemon={pokemon} sprites={pokemon.sprites}/>
  })

  return (
    <Card.Group itemsPerRow={6} >
      <h1>Hello From Pokemon Collection</h1>
      {listOfPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
