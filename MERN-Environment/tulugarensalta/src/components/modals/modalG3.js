import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselG3 from '../carousel/department/carouselG3';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesG3 from './tServices/tServicesG3';

const ModalG3 = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Gorriti 3 </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselG3 />
          <ServicesG3 />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalG3;
