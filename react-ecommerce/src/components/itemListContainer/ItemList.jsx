import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from '../data/data.js';


const ItemList = () => {
  
  const [products, setProducts] = useState([]);

  
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };


  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div>
      {
       
        products.length ? ( //si en products no hay nada, el valor será "0" y en ese caso, un cero se puede interpretar como un valor booleano por lo cual se considerará como falso
          <>
            {
              //Luego de dos segundos, products tendrá los productos dentro, y por lo tanto el products.length será distinto de "0", así que se puede interpretar como un valor booleano "true"
              products.map((product) => {
                // acá tenemos el uso de map, que basicamente está retornando un div con nuestro item adentro tantas veces como productos tenga en mi array de productos (nótese la propiedad key a la cual asigno el id para que react pueda identificar los nodos que se van creando y así los pueda diferenciar). Por favor leer la documentación de map en MDN
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) //Si products.length es "0" se interpreta como falso y por lo tanto se imprimirá "cargando productos"
        //Recuerden, en javascript tenemos tres datos que se pueden interpretar como false: 0, false y undefined
      }
    </div>
  );
};

export default ItemList;
