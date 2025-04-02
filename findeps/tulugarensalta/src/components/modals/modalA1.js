import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselA1 from '../carousel/department/carouselA1';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesG1A1 from './tServices/tServicesG1A1';

const ModalA1 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Mas Información {' '} <FaSearchPlus size={20}/> 
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Alvarado 1 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselA1 />
          <ServicesG1A1 />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalA1;
