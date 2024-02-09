import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({products}) => {
    return (        
            <div key={products.id} className='itemDetailContainer'>
                <div className='imgItem'>
                    <img src={products.img} alt={products.name} />
                </div>
                <div className='itemDescription'>
                    <h3>{products.name}</h3>
                    <h3>{products.price}</h3>
                    <h3>{products.stock}</h3>
                    <h3>{products.description}</h3>
                </div>
                <div className='itemCountContainer'>
                    <ItemCount initial={1} stock={products.stock} className='itemCount' />
                </div>
            </div>
    )
}

export default ItemDetail
