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
    <div>  {
    products.length ? ( 
        <>
            {
        
            products.map((product) => {
            
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
              ) 
            }
          </div>
        );
      };
export default ItemList;