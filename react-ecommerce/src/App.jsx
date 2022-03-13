
import React from 'react';
import Titulo from './components/titulo/Titulo';
import NavBar from './components/navbar/NavBar';
////////////////////////////////////////////////
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';




function App() {


  return (
    <div className="App">
      <NavBar />
      
      <img src={logo} className="App-logo" alt="logo" />
      
      <div>
        <Titulo />
      </div>
      
      <input placeholder='hola'/>
    </div>
  );
}

export default App;
