import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Pokemons:FC<any>=( ) =>{
const [pokemonList, setPokemonList]=useState<any>()
const [prev, setPrev]=useState<any>()
const [next, setNext]=useState<any>()

const[url, setUrl]=useState<any>({url:`https://pokeapi.co/api/v2/pokemon/`,page:1})
const fetchPokemonList=async(val?:any)=>
{


  try{
  const response = await axios.get(url.url)

//@ts-ignore
const b=response.data.results
const arr=[]
setPrev(response.data.previous)
setNext(response.data.next)

for(let i=0;i<b.length;i++){
  try{  
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${b[i].name}`
    )
    arr.push({...b[i], img:response.data.sprites.front_shiny})
  // console.log(response,'response')
  // console.log( arr, "[...pokemonList,{...pokemonList[i], img:'hi'}]")

  setPokemonList(arr)

  }catch(e){
    console.log(e, 'fdshgjfg')  
  }
  }


}catch(e){console.log(e)}
}

useEffect(()=>{
  fetchPokemonList()
},[next, prev, url.page, url.url])






  return (
    <>
   
    <div className="container md-3">
      <input onChange={(e)=>fetchPokemonList(e.target.value)}/>

  

       {pokemonList&&pokemonList.map((item:any, index:number)=>
      {return ( <Link to={`/${item.name}`}  className='card '><div key={item.name}>
            
     <img src={item.img}>
        
      </img>
      <div className='name'> {item.name}</div>

      </div></Link>
             

  
) }
    
  )}

</div>  
   
<div className='button-wrapper'><button onClick={()=>{(url.page)>1?setUrl({url:prev, page:(--url.page)}):setUrl({url:`https://pokeapi.co/api/v2/pokemon/`,page:1})
}}>Prev</button>
<button onClick={()=>{
  (url.page)<58&&setUrl({url:next, page:++url.page})}}> Next</button></div>
 


  </>

  );
}

export default Pokemons;
