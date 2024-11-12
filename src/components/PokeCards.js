import React from "react";
import "../styles/PokeCards.css";

//console.log("it is just a test");

function PokeCards({ pokeStuff, loading, pokeDetail }) {
  console.log("POKESTUUFFFFF", pokeStuff);
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        pokeStuff.map((pokeItem, pokeIndex) => {
          return (
            <div
              className="pokeCard"
              key={pokeItem.id}
              onclick={() => pokeDetail(pokeItem)}
            >
              <div className="pokeImg_cont">
                <img
                  className="pokeImage"
                  src={pokeItem.sprites.front_default}
                  alt="card_image"
                />
              </div>
              <div className="Pokename_Cont">
                <h2>{pokeItem.name}</h2>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default PokeCards;
