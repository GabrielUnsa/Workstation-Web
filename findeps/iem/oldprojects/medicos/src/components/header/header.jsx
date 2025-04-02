import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { RiUserSearchLine } from 'react-icons/ri';
import './header.css';

const Header = () => (
  <header>
    <Navbar className = "navBar">
    <Container fluid>
      <Navbar.Brand href="/">Pedidos Medicos</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-5 my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/nuevo_pedido_medico">Nuevo Pedido</Nav.Link>
          <NavDropdown title="Reporte" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Semanal</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mensual</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Anual</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown href="#" title="Docentes" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Alta</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Baja</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex me-auto">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Buscar"
          />
          <Button variant="outline-dark"> <RiUserSearchLine /> </Button>  
        </Form>
          <DropdownButton align="end" title="Usuario" variant='outline-dark' id="dropdown-menu-align-end">
            <Dropdown.Item eventKey="1">Perfil</Dropdown.Item>
            <Dropdown.Item eventKey="2">Cambiar Contraseña</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Cerrar Sesion</Dropdown.Item>
          </DropdownButton>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
);

export default Header;
