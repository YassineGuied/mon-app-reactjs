//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { Navbar } from './Component/Navbar/Navbar';
import { Navbar } from "./Component/Navbar/Navbar"
import { Boddy } from "./Component/Boddy/Boddy";

function App() {
  return (    
    <div className="App">
      <Navbar />
      <Boddy />
    </div>
  );
}

export default App;
