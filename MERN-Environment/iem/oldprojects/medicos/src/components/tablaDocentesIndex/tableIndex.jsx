import { Table, Container, Button, Row, Col, Pagination } from 'react-bootstrap';
import { AiOutlineFileAdd, AiFillEdit, AiOutlineFileSearch, AiOutlineDelete } from 'react-icons/ai';
import './tableIndex.css';

const TableIndex = () => (
  <Container>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Apellido(s)</th>
          <th>Nombre(s)</th>
          <th>Legajo</th>
          <th>Fecha - Hora</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className="td-center">7654</td>
          <td className="td-end">dic 24 2021 - 07:30</td>
          <td>
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> 
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-warning'> <AiFillEdit /> </Button> 
                </Col>
                <Col md="auto">   
                  <Button variant='outline-info'> <AiOutlineFileSearch /> </Button>
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-danger'> <AiOutlineDelete /> </Button>
                </Col>
              </Row>
            </Container>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td className="td-end">dic 23 2021 - 15:30</td>
          <td>
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> 
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-warning'> <AiFillEdit /> </Button> 
                </Col>
                <Col md="auto">   
                  <Button variant='outline-info'> <AiOutlineFileSearch /> </Button>
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-danger'> <AiOutlineDelete /> </Button>
                </Col>
              </Row>
            </Container>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td className="td-end">dic 23 2021 - 15:30</td>
          <td>
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> 
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-warning'> <AiFillEdit /> </Button> 
                </Col>
                <Col md="auto">   
                  <Button variant='outline-info'> <AiOutlineFileSearch /> </Button>
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-danger'> <AiOutlineDelete /> </Button>
                </Col>
              </Row>
            </Container>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td className="td-end">dic 23 2021 - 15:30</td>
          <td>
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> 
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-warning'> <AiFillEdit /> </Button> 
                </Col>
                <Col md="auto">   
                  <Button variant='outline-info'> <AiOutlineFileSearch /> </Button>
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-danger'> <AiOutlineDelete /> </Button>
                </Col>
              </Row>
            </Container>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td className="td-end">dic 23 2021 - 15:30</td>
          <td>
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> 
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-warning'> <AiFillEdit /> </Button> 
                </Col>
                <Col md="auto">   
                  <Button variant='outline-info'> <AiOutlineFileSearch /> </Button>
                </Col>
                <Col md="auto"> 
                  <Button variant='outline-danger'> <AiOutlineDelete /> </Button>
                </Col>
              </Row>
            </Container>
          </td>
        </tr>

      </tbody>
    </Table>
     <Pagination>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item active>{12}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item>
    <Pagination.Item disabled>{14}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
  </Container>
 );

export default TableIndex;
