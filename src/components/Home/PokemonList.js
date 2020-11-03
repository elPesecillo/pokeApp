import React from "react";
import "../../pokemon.css";

function PokemonList({ pokemons, selectPokemon }) {
  const drawPokemon = () => {
    return pokemons.map((p, id) => (
      <li
        key={id}
        onClick={() => selectPokemon(p.id)}
        className={
          p.selected
            ? "list-group-item d-flex pokemon-item-list selected"
            : "list-group-item d-flex pokemon-item-list"
        }
      >
        <img className="col-3" src={p.sprites.front_default} />
        <p className="col-4 pokemon-text-list">N.º {p.id}</p>
        <p className="col-5 pokemon-text-list">{p.name}</p>
      </li>
    ));
  };

  return <ul className="list-group">{pokemons.length > 0 && drawPokemon()}</ul>;
}

export default PokemonList;
