import React from 'react';
import {
  MDBInputGroup,
  MDBContainer,
  MDBDropdown,
  MDBBtn,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu
} from 'mdb-react-ui-kit';

export default function NuevoIngreso() {
  return (
    <MDBContainer>
      <MDBDropdown dropright group className='shadow-0'>
        <MDBDropdownToggle color='link' className="text-black">Tipo</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Nota Entrada</MDBDropdownItem>
          <MDBDropdownItem link>Nota Salida</MDBDropdownItem>
          <MDBDropdownItem link>Expediente</MDBDropdownItem>
          <MDBDropdownItem link>Actuaciones</MDBDropdownItem>
       </MDBDropdownMenu>
      </MDBDropdown>    
    </MDBContainer>
     );
}
