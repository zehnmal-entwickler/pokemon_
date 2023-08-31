import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Pokedex.css";

function Pokedex() {
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  //
  useEffect(() => {
    axios.get(pokeUrl);
  }, []);
  //
  return <div className="pokemain_backgrnd">Yyyyyyyyyyy</div>;
}

export default Pokedex;
