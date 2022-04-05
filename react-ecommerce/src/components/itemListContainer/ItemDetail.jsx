import ItemCount from "./ItemCount"

function ItemDetail({ producto }) {
    return (
      <>
        <div>{producto.name}</div>
        <div>{producto.price}</div>
        < ItemCount/>
      </>
    )
  }
  export default ItemDetail
  