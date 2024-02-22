import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import AddedProduct from '../AddedProduct/AddedProduct';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ products }) => {
    const [cart, setCart] = useState(false);
    const { addCart } = useContext(CartContext);

    const onAddToCart = (amount) => {
        addCart(products, amount);
        setCart(true);
    };

    return (
        <div className='itemDetailContainer'>
            {!cart && (
                <>
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
                        <ItemCount initial={1} stock={products.stock} className='itemCount' onAdd={onAddToCart} />
                    </div>
                </>
            )}
            {cart && <AddedProduct />}
        </div>
    );
};

export default ItemDetail;
