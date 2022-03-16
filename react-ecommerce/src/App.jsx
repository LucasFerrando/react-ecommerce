
import React from 'react';
import Titulo from './components/titulo/Titulo';
import NavBar from './components/navbar/NavBar';
////////////////////////////////////////////////
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Cards from './components/itemListContainer/Cards';




function App() {


  return (
    <div className="App">
      <NavBar />
      
      <img src={logo} className="App-logo" alt="logo" />
      
      <Titulo tituloProps= 'Ecommerce' subtitulo='un lugar donde comprar'/>
      <Cards tituloCard='soy la primer card' />
      <Cards tituloCard='soy la segunda card'/>

      
      
    </div>
  );
}

export default App;
