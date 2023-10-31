import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemonData, setPokemonData }) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
  });

  function handleNewPokemonInput(event) {
    const {name, value} = event.target;
    // console.log(event.target.name)
    // console.log(event.target.value)
    
    const updateObject = { ...newPokemon };

    if (name === 'hp') {
      updateObject[name] = Number(value);
    } else if (name === 'front' || name === 'back') {
      const updatedSprites = { ...updateObject.sprites, [name]: value };
      updateObject.sprites = updatedSprites;
    } else {
      updateObject[name] = value;
    }

    setNewPokemon(updateObject);
  }

  function handleNewPokemonSubmit(event){
    event.preventDefault();

    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(response => {
      if(response.ok){
        return response.json()
      }
    })
    .then(returnedData => {

      setPokemonData([...pokemonData, returnedData])
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleNewPokemonSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          onChange={handleNewPokemonInput}
          />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          onChange={handleNewPokemonInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={handleNewPokemonInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={handleNewPokemonInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
