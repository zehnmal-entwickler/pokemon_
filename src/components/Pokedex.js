import React, { useState, useEffect } from "react";
import PokeCards from "./PokeCards";
import axios from "axios";
import "../styles/Pokedex.css";
import PokeDetails from "./PokeDetails";

function Pokedex() {
  const [pokeData, setPokeData] = useState([]);
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokeLoading, setPokeLoading] = useState(true);
  //
  async function pokefunctionMon() {
    setPokeLoading(true);
    const res = await axios.get(pokeUrl);
    console.log("POKEEDATAA", res);
    //
    pokemonMapping(res.data.results);
    setPokeLoading(false);
    
  }
  // console.log("DAttAAAAA", pokeData);
  //
  async function pokemonMapping(res) {
    res.map(async (pokeItem) => {
      const result = await axios.get(pokeItem.url);
      // console.log("RESUULLTTT", result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  }
  //
  useEffect(() => {
    pokefunctionMon();
  }, [pokeUrl]);
  //
  return (
    <>
      <div className="pokedex_Container">
        <div className="pokemain_backgrnd">
          <PokeCards pokeStuff={pokeData} loading={pokeLoading}/>
        </div>
        <div>
          <PokeDetails />
        </div>
      </div>
    </>
  );
}

export default Pokedex;
