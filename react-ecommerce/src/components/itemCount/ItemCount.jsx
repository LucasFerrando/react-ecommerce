import React from 'react'

import '../styles/ItemCount.css'
//import Boton from './boton'
//import Cantidad from './Cantidad';
import { useState } from 'react';


{/*
function ItemCount(stock, inicial, onAdd) {
    const stock = 3
    const inicial = 1;
    
    const [numClicks, setNumClics] = useState(inicial);

    const manejarClic = () =>{
        setNumClics (numClicks + 1);

    }
    const restar = () =>{
        setNumClics (numClicks - 1)
    }

    return (
    <div className='contenedor-itemCount'>
        <Cantidad numClicks={numClicks}/>
        <Boton 
            texto='+'
            esBotonDeClic={true}
            manejarClic={manejarClic}
        />
        <Boton 
            texto='-'
            esBotonDeClic={false}
            manejarClic={restar}/>
    </div>
    )
}

export default ItemCount


*/}
////////////////////////////////////////////////////////////////////////////////////////////////
function ItemCount () {
    let initial = 1; 
    let stock = 7; 
  
    //hook de estado
    const [qty, setQty] = useState(initial);
  
    const onAdd = (qty) => {
      alert(`Agregaste ${qty} productos`);
    };
  
    const addProduct = (num) => {
      setQty(qty + num);
    };
  
    return (
      <div className="contenedor-itemcount">
        <div className="count-container__contador">
          <button
            className="botonNeg"
            onClick={() => addProduct(-1)}
            disabled={qty === initial ? true : null}
          >
            -
          </button>
          <span>{qty}</span>
          <button
            className="botonPos"
            onClick={() => addProduct(+1)}
            disabled={qty === stock ? true : null}
          >
            +
          </button>
        </div>
  
        <button
        
          onClick={() => onAdd(qty)}
          disabled={stock === 0 ? true : null}
        >
          Añadir
        </button>
      </div>
    );
  };

  export default ItemCount