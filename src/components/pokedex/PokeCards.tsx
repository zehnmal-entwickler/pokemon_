import React from "react";
import styles from "@/styles/PokeCards.module.css"; //

export function PokeCards({ pokeStuff, loading, pokeDetail }) {
  console.log("POKESTUUFFFFF", pokeStuff);
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        pokeStuff.map((pokeItem, pokeIndex) => {
          return (
            <div
              // className="pokeCard"
              className={styles.pokeCard}
              key={pokeItem.id}
              onClick={() => pokeDetail(pokeItem)}
            >
              <div className={styles.pokeImg_cont}>
                <img
                  className={styles.pokeImage}
                  src={pokeItem.sprites.front_default}
                  alt="card_image"
                />
              </div>
              <div className={styles.Pokename_Cont}>
                <h2>{pokeItem.name}</h2>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
