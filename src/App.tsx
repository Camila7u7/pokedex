import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { Pokedex } from './pokedex/Pokedex'

function App() {
  return (
    <div className="App">
      <Pokedex/>
    </div>
  );
}

export default App;
