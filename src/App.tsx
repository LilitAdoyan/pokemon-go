import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PokemonDetails from './pages/pokemon-details';
import Pokemons from './pages/pokemons';

function App() {

const [name,setName]=useState<any>()

  return (
    
   
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={<Pokemons/>}/>
  <Route path='/:id' element={<PokemonDetails val={'id'}/>}/>


</Routes>
</BrowserRouter> </div>  
  );
}

export default App;
