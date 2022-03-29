import {useEffect, useState} from 'react'


import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [producto, setProducto] = useState( {} )

 

  useEffect(()=> {
    getFetchOne   
    .then(resp => setProducto(resp) )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer
