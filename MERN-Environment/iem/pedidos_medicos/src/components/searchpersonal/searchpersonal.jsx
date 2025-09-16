import { Table, Container, Button, Pagination, Form, FormControl } from 'react-bootstrap';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { RiSearchLine } from 'react-icons/ri';
import './searchpersonal.css';


let active = 2;
let items = [];
for (let number = 1; number <= 2; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const TableSearchPersonal = () => (

 <Container>
      <Form className="d-flex justify-content-md-center">
      <FormControl
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
          className="fcs me-2"
        />
        <Button className="fbs" variant="outline-dark"> <RiSearchLine /> </Button>
      </Form>
   <br />
    <Table responsive className="mx-auto w-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Apellido(s)</th>
          <th>Nombre(s)</th>
          <th>Legajo</th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className="td-center">7654</td>
          <td> <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton </td>
          <td className="td-center">8361</td>
          <td> <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td> <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td> <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="td-center">8361</td>
          <td> <Button variant='outline-success'> <AiOutlineFileAdd /> </Button> </td>
        </tr>
      </tbody>
      </Table>
   <div className="d-flex justify-content-center">
<Pagination>
        {items}
      </Pagination>
      </div>
       
   </Container>

 
 );

export default TableSearchPersonal;
