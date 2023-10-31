import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchState, setSearchState] = useState("");

  useEffect(()=> {
    fetch(`http://localhost:3001/pokemon`)
      .then(response => response.json())
      .then(returnedData => {
        setPokemonData(returnedData)
      })
  }, [])

  function handleSearchInput(event){
    const {value} = event.target;
    setSearchState(value)
  }

  const searchedPokemonData = pokemonData.filter((pokemon) => {
    const {name} = pokemon;
    // console.log(name)
    if (searchState === "") {
      return true
    }
    if (name.toLowerCase().includes(searchState.toLowerCase())) {
      return true
    }
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      pokemonData={pokemonData}
      setPokemonData={setPokemonData}
      />
      <br />
      <Search handleSearchInput={handleSearchInput}/>
      <br />
      <PokemonCollection pokemonData={searchedPokemonData}/>
    </Container>
  );
}

export default PokemonPage;
