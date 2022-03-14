import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ViewUser(props: any) {
  const { show, handleClose, name, username, email, phone, website } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>
          website: <a href="#">{website}</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
