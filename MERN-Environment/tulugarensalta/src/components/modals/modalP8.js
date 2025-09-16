import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselP8 from '../carousel/department/carouselP8';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesP from './tServices/tServicesP';

const ModalP8 = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Pueyrredon 8 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselP8 />
          <ServicesP />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalP8;
