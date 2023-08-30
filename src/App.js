import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import axios from "axios";
import "./app.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results.map((poke) => poke.name));
    });
  }, []);

  return (
    <div className="app_backgrnd">
      <PokeList pokemon={pokemon} />
    </div>
  );
}

export default App;
