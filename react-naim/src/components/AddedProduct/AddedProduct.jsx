import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const AddedProduct = () => {
    const { cart, emptyCart } = useContext(CartContext);

    const renderCartContent = () => {
        if (cart.length === 0) {
            return (
                <div>
                    <p>El carrito de compras está vacío.</p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            );
        } else {
            return (
                <div>
                    {cart.map((product) => (
                        <div key={product.products.id} className="addedProductItem">
                            <h3>{product.products.name} ha sido agregado al carrito</h3>
                            <img src={product.products.img} alt={product.products.name} />
                            <p>Cantidad: {product.amount}</p>
                            <p>Precio Total: UYU {product.products.price * product.amount}</p>
                        </div>
                    ))}
                    <div className="addedProductLinks">
                        <Link to="/cart">Ir al carrito</Link>
                        <Link to="/">Seguir navegando</Link>
                        <button onClick={emptyCart}>Vaciar carrito</button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="addedProductContainer">
            {renderCartContent()}
        </div>
    );
};

export default AddedProduct;
