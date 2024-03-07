import { useContext } from 'react'
import cartIcon from '/cart.svg'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {amountCart} = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <Link to={"/cart"}>
                <img src={cartIcon} alt="carritoDeCompras"/>
                {amountCart() > 0 && <p>{amountCart()}</p>}
            </Link>
        </div>
    )
}

export default CartWidget
