import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const addCart = () => {
        if (counter > 0) {
            onAdd(counter);
        }
    };

    return (
        <div className='itemCount'>
            {stock > 0 ? (
                <div className='itemCountInfo'>
                    <h3>Cantidad: {counter}</h3>
                    <div className='itemCountButtons'>
                        <button className='decrementButton' onClick={decrement}>-</button>
                        <button className='addCart' onClick={addCart}>Agregar al carrito</button>
                        <button className='incrementButton' onClick={increment}>+</button>
                    </div>
                </div>
            ) : (
                <p className="outOfStock">Producto agotado</p>
            )}
        </div>
    );
};

export default ItemCount;
