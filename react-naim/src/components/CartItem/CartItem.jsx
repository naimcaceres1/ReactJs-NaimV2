import { CartContext }  from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = (products) => {
    const {deleteProduct} = useContext(CartContext)
    return (
        <div>
            <h3>{products.product.products.name}</h3>
            <img src={products.product.products.img} alt="{products.product.name}" />
            <p>cantidad: {products.product.amount}</p>
            <p>valor total: UYU {products.product.products.price*products.product.amount}</p>
            <button onClick={() => deleteProduct(products.product.products.id)}>eliminar producto</button>
            

        </div>
    )
}

export default CartItem
