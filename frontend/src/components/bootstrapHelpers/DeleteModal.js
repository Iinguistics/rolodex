import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';


const DeleteModal = ({ submitDelete, buttonText, title, body }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit = (e)=>{
      handleClose();
      submitDelete(e);
  }



    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            {buttonText}
            <AiOutlineDelete />
        </Button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={ (e)=> submit(e) }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default DeleteModal
