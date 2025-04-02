import React from 'react';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Flogin() {
  return (
    <form action="/sistemas">
      <MDBInput className='mb-4' type='text' id='form1Example1' label='Usuario' />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Contraseña' />
      <MDBBtn type='submit' rounded block>
        Ingresar
      </MDBBtn>
    </form>
  );
}
