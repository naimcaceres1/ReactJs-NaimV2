import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({products}) => {
    return (        
            <div key={products .id}>
                <h1>{products.name}</h1>
                <img src={products.img} alt={products.name} />
                <h2>{products.price}</h2>
                <h3>{products.stock}</h3>
                <p>{products.description}</p>

                <ItemCount initial={1} stock={products.stock} />
            </div>
    )
}

export default ItemDetail
