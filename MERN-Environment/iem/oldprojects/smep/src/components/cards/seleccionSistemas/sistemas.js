import data from './../../../data/sistemas/sistemas.json';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBRipple
} from 'mdb-react-ui-kit';
import './sistemas.css';

export default function SistemasSelection() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      { data.map( (step) => (
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' className='bg-image hover-overlay'>
              <a href={step.hrefto}>
                <MDBCardImage 
                  src={step.imgpath}
                  alt={step.imgalt}
                  position='top'
                  className='sizeImg'
                />
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-center text-black fs-4"> 
                {step.textsys}
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
   </MDBRow>
  );
}
