import data from './../../../data/mesa/ultimos/last20input.json';
import { 
  MDBBtn, 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody 
} from 'mdb-react-ui-kit';
import './../tables.css';
import { UilEdit } from '@iconscout/react-unicons';

export default function TableMe() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Tipo</th>
          <th scope='col'>Asunto</th>
          <th scope='col'>Acciones</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        { data.map( (step) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'> {step.tipo} {' '} {step.numero} </p>
                <p className='text-muted mb-0'>{step.fechora}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'> {step.title} </p>
            <p className='text-muted mb-0'> {step.docente} </p>
          </td>
          <td>
            <MDBBtn outline rounded color='warning' className="warningBtn" size='sm'> <UilEdit/> </MDBBtn> 
          </td>
        </tr>
        )) }
       </MDBTableBody>
    </MDBTable>
  );
}
