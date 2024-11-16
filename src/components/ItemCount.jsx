import React, { useState } from 'react'

function ItemCount() {
  const [itemCount, setItemCount] = useState(0)
  const addItem = () => {
    setItemCount(itemCount + 1) 
  }

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1) 
    }
  }

  return (
    <div>
      <h2>Wish List</h2>
      <p>Items en el carrito: {itemCount}</p>
      <button onClick={addItem}>Add</button>
      <button onClick={removeItem} disabled={itemCount === 0}>Remove</button>
    </div>
  )
}

export default ItemCount