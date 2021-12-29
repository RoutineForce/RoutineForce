import React, {useState} from 'react';
import {Icon, Modal, Button, Divider} from 'semantic-ui-react';
import '../../CSS/common/IconModal.css';

interface Modalprops {
  header?: any;
  body?: any;
  icon?: any;
  name?: string;
}

export default function IconModal(props: Modalprops) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Icon
        name={props.icon}
        onClick={handleShow}
        size="big"
        circular
        inverted
        color="orange"
      >
        <div className="IconName">{props.name}</div>
      </Icon>
      <Modal
        className="RoutineModal"
        basic
        open={show}
        onClose={handleClose}
        size="small"
      >
        <Modal.Header className="Header">{props.header}</Modal.Header>
        <Divider />
        <Modal.Content className="Body">{props.body}</Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={handleClose}>
            <Icon name="remove" /> 닫기
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
