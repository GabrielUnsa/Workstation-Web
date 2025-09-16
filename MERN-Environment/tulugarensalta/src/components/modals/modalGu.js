import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CarouselGu from '../carousel/department/carouselGu';
import { FaSearchPlus } from 'react-icons/fa';
import ServicesGu from './tServices/tServicesGu';

const ModalGu = () => {
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
          <Modal.Title id="example-custom-modal-styling-title"> Departamento Güemes </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselGu />
          <ServicesGu />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalGu;
