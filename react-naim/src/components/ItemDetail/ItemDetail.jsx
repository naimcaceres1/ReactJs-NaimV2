import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({products}) => {

    const [cart,setCart] = useState(false)

    const {addCart} = useContext(CartContext)

    const onAdd = (amount) =>{

        setCart(true)

        addCart(products, amount)

    }


    return (        
            <div key={products.id} className='itemDetailContainer'>
                <div className='imgItem'>
                    <img src={products.img} alt={products.name} />
                </div>
                <div className='itemDescription'>
                    <h3>{products.name}</h3>
                    <h3> UYU {products.price}</h3>
                    <h3>Stock disponible: {products.stock}</h3>
                    <h3>{products.description}</h3>
                </div>
                <div className='itemCountContainer'>
                    {cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCount initial={1} stock={products.stock} className='itemCount' onAdd={onAdd}/>}
                </div>
            </div>
    )
}

export default ItemDetail
