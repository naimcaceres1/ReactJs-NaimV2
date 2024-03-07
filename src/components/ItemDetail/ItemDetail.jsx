import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import AddedProduct from '../AddedProduct/AddedProduct';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ products }) => {
    const [lastAddedProduct, setLastAddedProduct] = useState(null);
    const { addCart } = useContext(CartContext);

    const onAddToCart = (amount) => {
        addCart(products, amount);
        setLastAddedProduct({ products, amount });
    };

    return (
        <div className='itemDetailContainer'>
            {!lastAddedProduct && (
                <>
                    <div className='imgItemDetail'>
                        <img src={products.img} alt={products.name} />
                    </div>
                    <div className='itemDescriptionDetail'>
                        <h3>{products.name}</h3>
                        <h3> UYU {products.price}</h3>
                        <h3>Stock disponible: {products.stock} unidades</h3>
                    </div>
                    <div className='itemCountContainer'>
                        <ItemCount initial={1} stock={products.stock} className='itemCount' onAdd={onAddToCart} />
                    </div>
                </>
            )}
            {lastAddedProduct && <AddedProduct product={lastAddedProduct} />}
        </div>
    );
};

export default ItemDetail;
