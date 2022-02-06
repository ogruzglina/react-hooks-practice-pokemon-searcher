import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [ pCollection, setPCollection ] = useState([]);
  const [ search, setSearch ] = useState('');

  useEffect( () => {
    fetch('http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(pokemons => setPCollection(pokemons))
  }, []);

  function handleAddPokemon (newPokemon) {
    setPCollection([
      ...pCollection,
      newPokemon,
    ]);
  }

  function handleSearch (e) {
    setSearch(e.target.value);
  }

  const pokemons = pCollection.filter(p => p.name.includes(search));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = { handleAddPokemon }/>
      <br />
      <Search search = { search } onSearchChange = { handleSearch }/>
      <br />
      <PokemonCollection pokemons = { pokemons }/>
    </Container>
  );
}

export default PokemonPage;
