import { Card, Row, Col, Container } from "react-bootstrap";
import ModalA1 from '../modals/modalA1';
import ModalA2 from '../modals/modalA2';
import ModalG1 from '../modals/modalG1';
import ModalG2 from '../modals/modalG2';
import ModalG5 from '../modals/modalG5';
import ModalGu from '../modals/modalGu';
import ModalP7 from '../modals/modalP7';
import ModalP8 from '../modals/modalP8';
import imgP1 from '../../assets/img/departamentos/Alvarado1/Dormitorio 1.jpg';
import imgP2 from '../../assets/img/departamentos/Alvarado2/Sala 1.jpg';
import imgP3 from '../../assets/img/departamentos/Gorriti1/Sala 2.jpg';
import imgP4 from '../../assets/img/departamentos/Gorriti2/Sala.jpg';
import imgP5 from '../../assets/img/departamentos/Gorriti5/Living.jpg';
import imgP6 from '../../assets/img/departamentos/Guemes/Dormitorio.jpg';
import imgP7 from '../../assets/img/departamentos/Pueyrredon 7/Fachada.jpg';
import imgP8 from '../../assets/img/departamentos/Pueyrredon 8/Dormitorio.jpg';

const departamentsGorritiAlone = [
  {
    img: imgP7,
    label: 'P7_P',
    title: 'Dep. Pueyrredon 7',
    description: '1 Dormitorio Superior, ideal para 2 personas. Ubicado en zona centrica a 5 minutos de la Plaza Principal, con balcon, luminoso piso superiores, ropa de cama y blanca, WiFi, cable y cochera opcional.',
    modal: <ModalP7/>,
  },
   {
    img: imgP8,
    label: 'P8_P',
    title: 'Dep. Pueyrredon 8',
    description: '1 Dormitorio Superior, ideal para 2 personas. Ubicado en zona centrica a 5 minutos de la Plaza Principal, con balcon, luminoso piso superiores, ropa de cama y blanca, WiFi, cable y cochera opcional.',
    modal: <ModalP8/>,
  },
]

const departmentsGorriti = [
  {
    img: imgP3,
    label: 'G1_P',
    title: 'Gorriti 1',
    description: '2 Ambientes con divisorios, ideal para 2 a 4 personas. Vista a las montañas. \n Cuenta con Wifi y Cable. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <ModalG1/>,
  },
  {
    img: imgP4,
    label: 'G2_P',
    title: 'Gorriti 2',
    description: '2 Ambientes con divisorios, ideal para 2 a 4 personas con balcon. \n Cuenta con Wifi y Cable.\n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <ModalG2/>,
  },
  {
    img: imgP5,
    label: 'G5_P',
    title: 'Gorriti 3',
    description: 'Departamento 2 dormitorios y 2 baños privados, ideal para 4 a 6 personas. \n Cuenta con Wifi y Cable. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama".',
    modal: <ModalG5/>,
  },
 ];

const departmentsAlvarado = [
  {
    img: imgP1,
    label: 'A1_P',
    title: 'Alvarado 1',
    description: 'Departamento con 1 dormitorio ideal para 2 a 3 personas. Vista a las montañas. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama". Cuenta con WiFi y cochera opcional.',
    modal: <ModalA1/>
  },
  {
    img: imgP2,
    label: 'A2_P',
    title: 'Alvarado 2',
    description: 'Departamento con 2 dormitorios ideal para 4 a 5 personas. Vista a las montañas. \n Ubicado a 6 cuadras de la plaza principal y 2 del "Boliche Balderrama". Cuenta con WiFi y cochera opcional.',    
    modal: <ModalA2/>,
  },
  {
    img: imgP6,
    label: 'Gu_P',
    title: 'Dep. Güemes',
    description: 'Monoambiente centrico, con capacidad hasta 2 personas. \n Edificio nuevo a estrenar. \n Cuenta con WiFi y cable.',    
    modal: <ModalGu/>,
  },

];


const CardsDepartament = () => (
<div id="departamentos">
  <br />
  <br />
  <Container> 
    <h1 className="display-4">Departamentos</h1>
    <br />
          <Row xs={1} md={3} className="justify-content-center">
        {departamentsGorritiAlone.map((step) => (
          <Col key={ step.label }>
            <Card>
              <Card.Img variant="top" src={step.img}/>
              <Card.Body>
                <Card.Title> { step.title } </Card.Title>
                <Card.Text>
                  { step.description }
                </Card.Text>
                { step.modal }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <Row xs={1} md={3} className="justify-content-center">
        {departmentsGorriti.map((step) => (
          <Col key={ step.label }>
            <Card>
              <Card.Img variant="top" src={step.img}/>
              <Card.Body>
                <Card.Title> { step.title } </Card.Title>
                <Card.Text>
                  { step.description }
                </Card.Text>
                { step.modal }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    <br />
    <Row xs={1} md={3} className="justify-content-center">
        {departmentsAlvarado.map((step) => (
          <Col key={ step.label }>
            <Card>
              <Card.Img variant="top" src={step.img} />
              <Card.Body>
                <Card.Title> { step.title } </Card.Title>
                <Card.Text>
                  { step.description }
                </Card.Text>
                { step.modal }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    <br />
  </Container>
  <br />
</div>
);
export default CardsDepartament;
