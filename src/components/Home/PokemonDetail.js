import React from "react";

function PokemonDetail({ pokemon }) {
  const getTypeStyle = (type) => {
    let backgroundColor = "";
    switch (type) {
      case "grass":
        backgroundColor = "#9bcc50";
        break;
      case "poison":
        backgroundColor = "#b97fc9";
        break;
      case "fire":
        backgroundColor = "#fd7d24";
        break;
      case "flying":
        backgroundColor = "#3dc7ef";
        break;
      case "water":
        backgroundColor = "#4592c4";
        break;
      case "bug":
        backgroundColor = "#729f3f";
        break;
      case "normal":
        backgroundColor = "#a4acaf";
        break;
      case "electric":
        backgroundColor = "#eed535";
        break;
      case "ground":
        backgroundColor = "#ab9842";
        break;
      case "fairy":
        backgroundColor = "#fdb9e9";
        break;
      case "fighting":
        backgroundColor = "#d56723";
        break;
      case "psychic":
        backgroundColor = "#f366b9";
        break;
      case "rock":
        backgroundColor = "#a38c21";
        break;
      case "steel":
        backgroundColor = "#9eb7b8";
        break;
      case "ghost":
        backgroundColor = "#7b62a3";
        break;
      case "ice":
        backgroundColor = "#51c4e7";
      case "dragon":
        backgroundColor = "#f16e57";

      default:
        backgroundColor = "#000";
        break;
    }
    return { backgroundColor, color: "#FFF", margin: "5px" };
  };

  return (
    <div className="pokemon-image-container">
      <h1 className="text-center">
        N.º {pokemon.id} {pokemon.name}
      </h1>
      <img
       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        className="img-fluid pokemon-image-detail d-block mx-auto"
      />
      <div className="pokemon-box-details">
        <ul className="list-group list-group-horizontal justify-content-center">
          {pokemon.types.length > 0 &&
            pokemon.types.map((t, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex pokemon-list-details"
                style={getTypeStyle(t.type.name)}
              >
                {t.type.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;
