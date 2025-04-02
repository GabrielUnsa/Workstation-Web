import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselG4 from '../carousel/department/carouselG4';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesG4 from './tServices/tServicesG4';

const ModalG4 = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Gorriti 4 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselG4 />
          <ServicesG4 />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalG4;
