import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import '../../CSS/common/modalButton.css';

interface Modalprops {
  header: any;
  body: any;
  button: any;
}

export default function CeteredModalButton(props: Modalprops) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modalButton">
      <button className="btnOrange" onClick={handleShow}>
        {props.button}
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-vcenter"
        centered
      >
        <Modal.Header closeButton>{props.header}</Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
      </Modal>
    </div>
  );
}
