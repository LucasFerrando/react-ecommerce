
import React from 'react';

import ItemListCr from './components/itemListContainer/ItemListCr';

import Titulo from './components/titulo/Titulo';
import NavBar from './components/navbar/NavBar';



////////////////////////////////////////////////
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {


  return (
    <div className="App">


      <NavBar />
      
      
      <Titulo tituloProps= 'Ecommerce' subtitulo='un lugar donde comprar'/>

      <ItemListCr  />
      
      



      
      
    </div>
  );
}

export default App;
