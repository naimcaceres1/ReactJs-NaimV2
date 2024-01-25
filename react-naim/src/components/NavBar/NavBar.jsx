import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return(
        <div className="navBarContainer">
            <h1>Trinity Shop</h1>
            <div>
                <ul>
                    <li><a href="#">Calzado</a></li>
                    <li><a href="#">Indumentaria</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Marcas</a></li>
                    <li><a href="#">Nosotoros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <CartWidget/>

        </div>

    )
}

export default NavBar