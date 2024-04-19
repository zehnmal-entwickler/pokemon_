import React, { useState, useEffect } from "react";
import axios from "axios";
import { PokeCards } from "./PokeCards";
import { PokeDetails } from "./PokeDetails";

import "@/styles/Pokedex.module.css";

export function Pokedex() {
  const [pokeData, setPokeData] = useState([]);
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokeLoading, setPokeLoading] = useState(true);
  const [pokeDex, setPokeDex] = useState();
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
        // state.sort((a, b) => (a.id > b.id ? 1 : -1));
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
        <div className="pokeCards_Cont">
          <PokeCards
            pokeStuff={pokeData}
            loading={pokeLoading}
            pokeDetail={(pokemonVal) => setPokeDex(pokemonVal)}
          />
        </div>
        <div className="pokeDetails_Cont">
          <PokeDetails data={pokeDex} />
        </div>
      </div>
    </>
  );
}
