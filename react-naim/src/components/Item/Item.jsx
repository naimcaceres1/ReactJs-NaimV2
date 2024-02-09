import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <Link to={`/detail/${product.id}`}>
            <div key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} />
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>
                
            </div>
        </Link>
    )
}

export default Item
