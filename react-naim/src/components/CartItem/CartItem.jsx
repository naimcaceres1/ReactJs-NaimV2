import React from 'react'

const CartItem = (products, deleteItem) => {
    return (
        <div>
            <h3>{products.product.nombre}</h3>
            <img src="{products.product.img}" alt="{products.product.name}" />
            <p>cantidad: {products.amount}</p>
            <p>valor unitario: ${products.product.price*products.amount}</p>
            <button onClick={() => deleteItem(products.product.id)}>eliminar producto</button>

        </div>
    )
}

export default CartItem
