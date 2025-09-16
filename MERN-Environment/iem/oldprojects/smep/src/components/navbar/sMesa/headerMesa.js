import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { UilUser } from '@iconscout/react-unicons';
import './../navbar.css';

export default function NavbarMe() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar collapseOnSelect fixed="top" expand='lg' light className="navBar">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Mesa de Entrada</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Inicio
              </MDBNavbarLink>
            </MDBNavbarItem>

              <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Registrar
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='nuevo-ingreso'>Ingreso</MDBDropdownItem>
                  <MDBDropdownItem link>Movimiento</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
 
            <MDBNavbarItem>
              <MDBNavbarLink href='#'> Buscar </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Informe
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Movimiento</MDBDropdownItem>
                  <MDBDropdownItem link>Notas x Personal</MDBDropdownItem>
                  <MDBDropdownItem link>Expediente x Personal</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBDropdown>
            <MDBDropdownToggle tag='a'className='dropdownHide'>
              <MDBBtn outline floating color="dark"> <UilUser /> </MDBBtn>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link href="salir">Cerrar Cesion</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
