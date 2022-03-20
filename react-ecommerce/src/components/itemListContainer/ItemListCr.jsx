

function ItemListCr({greeting, children}) {
    console.log(children)
    return (
    <div>{greeting}
    <h1>{children}</h1>
    </div>
  )
}

export default ItemListCr