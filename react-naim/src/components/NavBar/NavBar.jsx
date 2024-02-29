import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom"
import './NavBar.scss'

function NavBar() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container>
                <NavLink to="/"> Trinity Shop</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/categories/footwear"}>CALZADO</Link>
                        <Link to={"/categories/clothes"}>INDUMENTARIA</Link>
                        <Link to={"/categories/accesories"}>ACCESORIOS</Link>
                        <NavDropdown title="MARCAS" id="basic-nav-dropdown">
                            <Link to = {"/trademark/nike"}>Nike</Link>
                            <Link to={"/trademark/adidas"}>Adidas</Link>
                            <Link to={"/trademark/puma"}>Puma</Link>
                            <Link to={"/trademark/lacoste"}>Lacoste</Link>
                            <Link to={"/trademark/converse"}>Converse</Link>
                        </NavDropdown>
                        <Link to="/us">NOSOTROS</Link>
                        <Link to="/contacts">CONTACTOS</Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;