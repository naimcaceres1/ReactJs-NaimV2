import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, emptyCart, totalCart} = useContext(CartContext)


    return (
        <div>
            {
            cart.length == 0 ? 
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'}>Volver al inicio</Link>
            </div>
            :
            <div>
                <h2>Lista de productos:</h2>
                {cart.map((products,index)=>(
                    <CartItem key={index} product={products}/>
                ))}
            </div>
            }
            <div>
            {cart.length > 0 ? (
                <div>
                    <div><h3>Precio total: UYU {totalCart()}</h3></div>
                    <div><button onClick={emptyCart}>Vaciar carrito</button></div>
                    <div><Link to={'/checkout'}>Completar compra</Link></div>
                </div>
                ) : null}
            </div>
        </div>
    )
}

export default Cart

