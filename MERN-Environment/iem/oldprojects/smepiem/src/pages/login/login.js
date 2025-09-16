import Login from './../../components/login/login';
import {Container, Row, Col} from 'react-bootstrap';
import './login.css';

export default function LoginPage(){
  return(
    <Container>
      <Row class="justify-content-md-center">
        <Col></Col>
        <Col> <Login/ > </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
