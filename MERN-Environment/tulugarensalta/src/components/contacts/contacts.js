import { Container, Col, Row } from 'react-bootstrap';
import FormContact from './form';
import DataContact from './data';

export default function Contacts(){
  return(
    <div id="contactos">
      <br />
      <br />
      <Container>
        <h1 className="display-4">Contactos</h1>
        <br />
        <br />
        <Row>
          <Col> <FormContact /> </Col>
          <Col> <DataContact /> </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}
