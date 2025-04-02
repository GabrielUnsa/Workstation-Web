import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselA2 from '../carousel/department/carouselA2';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesA2 from './tServices/tServicesA2';

const ModalA2 = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Alvarado 2 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselA2 />
          <ServicesA2 />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalA2;
