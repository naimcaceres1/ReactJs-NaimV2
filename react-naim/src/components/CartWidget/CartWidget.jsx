import React from 'react'
import cartIcon from '../../assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <a href="#"><img src={cartIcon} alt="carritoDeCompras"/></a>
            <p>0</p>
        </div>
    )
}

export default CartWidget
