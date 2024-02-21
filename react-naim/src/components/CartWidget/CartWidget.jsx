import React, { useContext } from 'react'
import cartIcon from '../../assets/Icons/cart.svg'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {amountCart} = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <a href="#"><img src={cartIcon} alt="carritoDeCompras"/></a>
            <p>{amountCart == 0 ? null : amountCart}</p>
        </div>
    )
}

export default CartWidget
