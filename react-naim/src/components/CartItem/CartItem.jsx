import { CartContext }  from '../../context/CartContext'
import { useContext } from 'react'
import './CartItem.css'

const CartItem = (products) => {
    const {deleteProduct} = useContext(CartContext)
    return (
        <div className='cartProduct'>
            <h3>{products.product.products.name}</h3>
            <img src={products.product.products.img} alt="{products.product.name}" />
            <p>Cantidad: {products.product.amount}</p>
            <p>Valor total del producto: UYU {products.product.products.price*products.product.amount}</p>
            <button onClick={() => deleteProduct(products.product.products.id)}>Eliminar producto</button>
            

        </div>
    )
}

export default CartItem
