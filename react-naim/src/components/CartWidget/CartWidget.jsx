import { useContext } from 'react'
import cartIcon from '../../assets/Icons/cart.svg'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {amountCart} = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <Link to={"/cart"}>
            <img src={cartIcon} alt="carritoDeCompras"/>
            <p>{amountCart() == 0 ? null : amountCart()}</p>
            </Link>
        </div>
    )
}

export default CartWidget
