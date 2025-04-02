import { Container, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import './newpm.css'

export default function NewPM(){
  return(
    <Container className="np">
      <Form>
        <Container>
          <Row>
             <Col className="d-flex justify-content-end">
              <Form.Group as={Row} controlId="validation01">
                <Form.Label column > Fecha Alta: </Form.Label>
                <Form.Control readOnly  plaintext type="date" className="p" />            
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Group as={Row} controlId="validation02">
                <Form.Label column sm="3"> Apellido(s): </Form.Label>
                <Col>
                  <Form.Control placeholder="apellido" readOnly plaintext defaultValue="Apellido 1 Apellido 2" />
                </Col>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group as={Row} controlId="validation03">
                <Form.Label column sm="3"> Nombre(s): </Form.Label>
                <Col>
                  <Form.Control placeholder="nombre" readOnly plaintext defaultValue="Nombre 1 Nombre 2"/>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Row} controlId="validation04">
                <Form.Label column sm="3"> DNI: </Form.Label>
                <Col>
                  <Form.Control placeholder="dni" readOnly plaintext defaultValue="99.999.999" />
                </Col>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group as={Row} controlId="validation05">
                <Form.Label column sm="3"> Legajo: </Form.Label>
                <Col>
                  <Form.Control placeholder="legajo" readOnly plaintext defaultValue="9999"/>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Row} controlId="validation06">
                <Form.Label column md="4"> Tarea que requisa </Form.Label>
                <Col>
                  <Form.Select className="p" defaultValue="Docente">
        <option>Docente</option>
        <option>Pau</option>
      </Form.Select>               </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} controlId="validation07">
                <Form.Label column sm="3"> A Satisfacer </Form.Label>
                <Col>
                  <Form.Control  plaintext type="date" className="p" />  
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>

  );
}
