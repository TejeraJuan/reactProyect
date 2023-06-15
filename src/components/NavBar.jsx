import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Juampix Store</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#inicio">Inicio</Nav.Link>
                  <Nav.Link href="#productos">Productos</Nav.Link>
                  <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget />
              </Container>
            </Navbar>
            );
}