import React, { FC, useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { isTemplateMiddle } from 'typescript';
import { AnyMxRecord } from 'dns';
import { useParams } from 'react-router-dom';

const PokemonDetails:FC<any> =()=> {
  const{id}=useParams()

  const [pokemonData, setPokemonData]=useState<any>()
const [stats, setStats]=useState<any>()

const fetchPokemon=async(id?:any)=>
{


  try{
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  setStats(response.data.stats)
setPokemonData(response.data.sprites.front_shiny)
}catch(e){console.log(e)}
}

useEffect(()=>{
  fetchPokemon(id)

},[])
  return (
    <div >


  <h3>Stats: </h3>
   
  {pokemonData&&<img src={pokemonData}/>}
{stats&&stats.map((stat:any)=><div>
<div><span>Stat name: </span><span>{stat.stat.name}</span></div>
<div><span>Base stat: </span><span>{stat.base_stat}</span></div>
<div><span>Effort: </span><span>{stat.effort}</span></div>

</div>)}
<h3>Weight</h3>

    </div>
  );
}

export default PokemonDetails;
