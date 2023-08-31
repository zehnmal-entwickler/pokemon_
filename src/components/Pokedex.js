import React, { useState, useEffect } from "react";
import PokeCards from "./PokeCards";
import axios from "axios";
import "../styles/Pokedex.css";
import PokeDetails from "./PokeDetails";

function Pokedex() {
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  //
  useEffect(() => {
    axios.get(pokeUrl);
  }, []);
  //
  return (
<>

<div className="pokemain_backgrnd"><PokeCards /></div>

<div><PokeDetails /></div>
</>


  );
  
}

export default Pokedex;
