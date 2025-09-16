import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselG2 from '../carousel/department/carouselG2';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesG2 from './tServices/tServicesG2';

const ModalG2 = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Gorriti 2 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselG2 />
          <ServicesG2 />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalG2;
