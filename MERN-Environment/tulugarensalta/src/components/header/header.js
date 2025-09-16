import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css';

const Header = () => (
<header>
<Navbar collapseOnSelect fixed="top" className="navBar" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"> Tu lugar en Salta </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#home">Inicio</Nav.Link> 
        <Nav.Link href="#departamentos">Departamentos</Nav.Link>
        <Nav.Link href="#servicios">Servicios</Nav.Link>
        <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
        <Nav.Link href="#contactos">Contactos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
);

export default Header;
