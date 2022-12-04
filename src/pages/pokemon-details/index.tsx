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

{pokemonData&&<img src={pokemonData}/>}
  <h3>Stats: </h3>
  <table>
    <thead>
      <th>Stat name</th>
      <th>Base stat</th>
      <th>Effort</th>
    </thead>
    <tbody>
{stats&&stats.map((stat:any)=><tr>
<td>{stat.stat.name}</td>
<td>{stat.base_stat}</td>
<td>{stat.effort}</td>

</tr>)}
    </tbody>
  </table>
 

<h3>Weight</h3>

    </div>
  );
}

export default PokemonDetails;
