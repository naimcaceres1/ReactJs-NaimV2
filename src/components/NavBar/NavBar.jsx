import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink } from "react-router-dom";
import './NavBar.scss';
import logo from '../../assets/icons/1-removebg-preview.png';

function NavBar() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container className='navBarContainer'>
                <NavLink className="navBarLogo" to="/"><img src={logo} alt="Logo" /></NavLink>
                <Nav className="navBarContent">
                    <NavLink to={"/categories/footwear"}>CALZADO</NavLink>
                    <NavLink to={"/categories/clothes"}>INDUMENTARIA</NavLink>
                    <NavLink to={"/categories/accesories"}>ACCESORIOS</NavLink>
                    <NavDropdown className='navBarDropdown' title="MARCAS" id="basic-nav-dropdown">
                        <NavLink to={"/trademark/nike"}>NIKE</NavLink>
                        <NavLink to={"/trademark/adidas"}>ADIDAS</NavLink>
                        <NavLink to={"/trademark/puma"}>PUMA</NavLink>
                        <NavLink to={"/trademark/lacoste"}>LACOSTE</NavLink>
                        <NavLink to={"/trademark/converse"}>CONVERSE</NavLink>
                    </NavDropdown>
                    <NavLink to="/us">NOSOTROS</NavLink>
                    <NavLink to="/contacts">CONTACTOS</NavLink>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar;
