import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselBz from '../carousel/department/carouselBz';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesBz from './tServices/tServicesBz';

const ModalBz = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Brizo </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselBz />
          <ServicesBz />
       </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBz;
