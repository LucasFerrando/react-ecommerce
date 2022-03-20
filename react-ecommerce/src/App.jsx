
import React from 'react';

import ItemListCr from './components/itemListContainer/ItemListCr';

import Titulo from './components/titulo/Titulo';
import NavBar from './components/navbar/NavBar';
import Cards from './components/itemListContainer/Cards';
import ItemCount from './components/itemCount/ItemCount';

////////////////////////////////////////////////
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {


  return (
    <div className="App">
      <ItemListCr greeting={alert('bienvenido')} />


      <NavBar />
      
      
      <Titulo tituloProps= 'Ecommerce' subtitulo='un lugar donde comprar'/>

      
      <ItemCount />

      <Cards tituloCard='soy la primer card' />
      <Cards tituloCard='soy la segunda card'/>

      
      
    </div>
  );
}

export default App;
