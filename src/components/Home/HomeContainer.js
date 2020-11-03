import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import { getPokemonKantoData } from "../../api/PokemonService";

function HomeContainer() {
  useEffect(async () => {
    try {
      let pokemons = await getPokemonKantoData();
      console.log(pokemons);
      setFilteredPokeList(pokemons);
      setPokeList(pokemons);
    } catch (err) {
      alert("an error occurs");
      console.error(err);
    }
  }, []);

  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSelect = (pokemonId) => {
    setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]);
    setFilteredPokeList(
      filteredPokeList.map((p) =>
        p.id === pokemonId
          ? { ...p, selected: true }
          : { ...p, selected: false }
      )
    );
  };

  const filterPokemon = (value) => {
    setFilter(value);
    setFilteredPokeList(
      pokeList.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
    );
  };
  return (
    <div className="row pokemon-app-container">
      <div className="col-6">
        {pokemonSelected && <PokemonDetail pokemon={pokemonSelected} />}
      </div>
      <div className="col-6 pokemon-list-container">
        <div style={{ height: "10%" }}>
          <div className="form-group">
            <label>Search</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type to search a pokemon..."
              value={filter}
              onChange={(event) => {
                let { value } = event.target;
                filterPokemon(value);
              }}
            />
          </div>
        </div>
        <div style={{ height: "90%", overflowY: "auto" }}>
          <PokemonList
            pokemons={filteredPokeList}
            selectPokemon={handleSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
