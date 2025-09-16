import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import { UilUser } from '@iconscout/react-unicons';
import './../navbar.css';

export default function NavbarSistemas() {
  return (
      <MDBNavbar className="navBar"> 
       <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'>SMEP</MDBNavbarBrand>
              <MDBDropdown>
                <MDBDropdownToggle tag='a'className='dropdownHide'>
                  <MDBBtn outline floating color="dark"> <UilUser /> </MDBBtn>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="salir">Cerrar Cesion</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        </MDBContainer>
      </MDBNavbar>
      );
}
