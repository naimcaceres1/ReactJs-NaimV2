import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className='itemList' key={products.id}>
            {products.map((product, id) =>{
                    return(
                        <Item key={id} product={product}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList
