import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {cart} = useContext(CartContext)


    return (
        <div>
            {
            cart.length == 0 
            ? 
            <div><h2>No hay productos en el carrito</h2></div>
            :
            <div>
                <h2>Lista de productos:</h2>
                {cart.map((products)=>(
                    <CartItem key={products.id} product={products }/>
                ))
                    
                }
            </div>
            }
        </div>
    )
}

export default Cart
