import React from "react";
import "../styles/PokeCards.css";

function PokeCards({ pokeStuff, loading }) {
  console.log("POKESTUUFFFFF", pokeStuff);
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        pokeStuff.map((pokeItem, pokeIndex) => {
          return (
            <div className="pokeCard">
              <img src={pokeItem.sprites.front_default} alt="card_image" />
              <h2>{pokeItem.species.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
}

export default PokeCards;
