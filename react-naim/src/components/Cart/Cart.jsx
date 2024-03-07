import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

    const {cart, emptyCart, totalCart} = useContext(CartContext)


    return (
        <div className='cartContainer'>
            {
            cart.length == 0 ? 
            <div className='cartContainerEmpty'>
                <h2>De momemento no hay productos en el carrito</h2>
                <Link to={'/'}>Volver al inicio</Link>
            </div>
            :
            <div className='cartContainerFull'>
                <h2>Lista de productos agrgados:</h2>
                {cart.map((products,index)=>(
                    <CartItem key={index} product={products}/>
                ))}
            </div>
            }
            <div className='cartContainerInfo'>
            {cart.length > 0 ? (
                <div className='cartContainerInfoContainer'>
                    <div className='cartContainerInfoPrice'>
                        <h3>Precio total: UYU {totalCart()}</h3>
                    </div>
                    <div className='cartContainerInfoButtons'>
                        <button><Link to={'/checkout'}>Completar compra</Link></button>
                        <button onClick={emptyCart}>Vaciar carrito</button>
                    </div>
                </div>
                ) : null}
            </div>
        </div>
    )
}

export default Cart

