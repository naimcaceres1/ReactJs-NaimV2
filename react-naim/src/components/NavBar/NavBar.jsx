import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"> Trinity Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/categories/footwear">CALZADO</Nav.Link>
                        <Nav.Link href="/categories/clothes">INDUMENTARIA</Nav.Link>
                        <Nav.Link href="/categories/accesories">ACCESORIOS</Nav.Link>
                        <NavDropdown title="MARCAS" id="basic-nav-dropdown">
                            <NavDropdown.Item href='/trademark/nike'>NIKE</NavDropdown.Item>
                            <NavDropdown.Item href='/trademark/adidas'>ADIDAS</NavDropdown.Item>
                            <NavDropdown.Item href='/trademark/puma'>PUMA</NavDropdown.Item>
                            <NavDropdown.Item href='/trademark/lacoste'>LACOSTE</NavDropdown.Item>
                            <NavDropdown.Item href='/trademark/converse'>CONVERSE</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/us">NOSOTROS</Nav.Link>
                        <Nav.Link href="/contacts">CONTACTOS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;