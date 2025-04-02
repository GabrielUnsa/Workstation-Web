import React from 'react';
import {
  MDBCard as Card,
  MDBCardBody as Body,
  MDBCardTitle as Title,
  MDBCardFooter as Footer,
} from 'mdb-react-ui-kit';
import iem from './../../../img/iem.png';
import Flogin from './../../forms/login/loginForm';
import './login.css';

const Login = () => (
    <Card alignment="center" className="cardLogin" border="None">
      <Body>
        <img src={iem} alt="iem" className="imgLogin" />
        <Title className="fs-2 fw-bold text-dark">Mesa de Entradas</Title>
        <br />
        <Flogin />
      </Body>
      <Footer className='text-muted'>2 days ago</Footer>
    </Card>
);
export default Login;
