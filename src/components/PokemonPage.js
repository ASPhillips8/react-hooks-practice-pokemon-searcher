import React, { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const filteredPokemon = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((pokemonData) => setPokemons(pokemonData))
  }, [])

  function handlePokemonSearch(search) {
    setSearchInput(search)
  }

  function handlePokemonSubmit(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitPokemon={handlePokemonSubmit} />
      <br />
      <Search onSearch={handlePokemonSearch} />
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  )
}

export default PokemonPage
