import React from "react";
import { Button, Modal } from "react-bootstrap";
import { View } from "../types";

//a modal that pops up when the user's name is clicked
export default function ViewUser(props: View) {
  //props that are used to display data
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
