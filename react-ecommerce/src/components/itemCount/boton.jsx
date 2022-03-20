import React from 'react';


function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button
            className={esBotonDeClic ? 'botonPos' : 'botonNeg'}
            onClick={manejarClic}>
            
            {texto}

        </button>
    );
}
export default Boton;