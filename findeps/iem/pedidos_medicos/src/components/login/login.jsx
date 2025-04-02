import { Form, Card, Button, Container, Col, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import user from './img/user.png';
import './login.css';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Ultimo inicio de sesion
  </Tooltip>
);
  const Login = () => (
    <Container>
      <Col md={{ span: 4, offset: 4 }}>
        <Card className="cardLogin justify-center" border="None">
        <Container>
          <Row className="justify-content-md-center">
            <img src={user} alt="Usuario" className="userImg"/>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title className="fs-2 text-center"> Iniciar Sesión </Card.Title>
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
          <Card.Footer className="text-muted text-center"> Hace 2 dias</Card.Footer>
        </OverlayTrigger>
        </Card>
      </Col>
      <br />
    </Container>
);
export default Login;
