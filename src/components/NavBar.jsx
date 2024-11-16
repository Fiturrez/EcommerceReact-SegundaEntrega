import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>Wish Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/beauty'>Beauty</Nav.Link>
            <Nav.Link as={Link} to='/category/fragrances'>Fragrances</Nav.Link>
            <Nav.Link as={Link} to='/category/furniture'>Furniture</Nav.Link>
            <Nav.Link as={Link} to='/category/groceries'>Groceries</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
        </>     
    );
}

export default NavBar