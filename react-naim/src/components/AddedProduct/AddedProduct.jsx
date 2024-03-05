import React from 'react';
import { Link } from 'react-router-dom';
import './AddedProduct.css'

const AddedProduct = ({ product }) => {

    return (
        <div className="addedProductContainer">
            <h2>{product.products.name} ha sido agregado al carrito</h2>
            <div key={product.products.id} className="addedProductItem">
                <img src={product.products.img} alt={product.products.name} />
                <p>Cantidad: {product.amount}</p>
                <p>Precio Total: UYU {product.products.price * product.amount}</p>
            </div>
            <div className="addedProductLinks">
                <Link to="/cart">Ir al carrito</Link>
                <Link to="/">Seguir navegando</Link>
            </div>
        </div>
    );
};

export default AddedProduct;
