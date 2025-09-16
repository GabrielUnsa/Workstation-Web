import { Form, Card, Button, Container, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import iem from './../../img/iem.png';
import './login.css';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Ultima Sesion
  </Tooltip>
);
  const Login = () => (
    <Card className="cardLogin" border="None">
      <Row className="justify-content-center">
        <img src={iem} alt="IEM" className="imgIem"/>
      </Row>
    <Card.Body>
    <Card.Title className="fs-2 text-center"> Sistema de Pedidos Medicos </Card.Title>
      <br />
      <Form>
        <Form.Floating className="mb-3">
          <Form.Control
            id="username"
            type="text"
            placeholder="Usuario"
          />
          <label htmlFor="username"> Usuario </label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="passuser"
            type="password"
            placeholder="Contraseña"
          />
          <label htmlFor="passuser"> Contraseña </label>
        </Form.Floating>
        <br />
        <Container>            
          <Row className="justify-content-md-center">
            <Button variant="outline-primary" type="submit" size="lg"> 
              <span> Ingresar </span>
            </Button>
          </Row>
        </Container>
      </Form>
    </Card.Body>
    <br />
    <OverlayTrigger placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip} >
      <Card.Footer className="text-muted text-center"> 21-09-22 11:30</Card.Footer>
    </OverlayTrigger>
  </Card>
);
export default Login;
