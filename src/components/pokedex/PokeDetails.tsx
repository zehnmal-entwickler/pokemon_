import React from "react";
import styles from "@/styles/PokeCards.module.css"; //

export function PokeDetails() {
  return (
    <>
      <h1>Picachu</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="picachu_picture"
      />
      <div className="poke_abilities">
        <div className="abilities_group">Static</div>
        <div className="abilities_group">lightning-rod</div>
        <div className="stats">
          <h3>HP: 35</h3>
          <h3>Attack: 55</h3>
          <h3>Defense: 40</h3>
        </div>
      </div>
    </>
  );
}
