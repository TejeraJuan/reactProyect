import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import data from '../data/products.json';
import { NavLink } from 'react-router-dom';

const categories = data.map(product => product.category)
const unique = new Set(categories)

export const NavBar = () => {
    return (
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand>Juampix Store</Navbar.Brand>
                <Nav className="me-auto">
                  {[...unique].map(item => (
                    <NavLink 
                     to={`/category/${item}`}
                     className='nav-link'
                     key={item}>
                      {item}
                    </NavLink>
                  ))}
                </Nav>
                <CartWidget />
              </Container>
            </Navbar>
            );
}