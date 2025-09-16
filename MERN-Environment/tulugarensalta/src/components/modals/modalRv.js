import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselRv from '../carousel/department/carouselRv';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesRv from './tServices/tServicesRv';

const ModalRv = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Rivadavia </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselRv />
          <ServicesRv />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRv;
