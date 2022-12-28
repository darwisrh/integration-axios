import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const button = {
  background: "#FFAF00",
  padding: "10px 80px",
  border: "1px solid #FFAF00",
  fontWeight: "800",
  fontSize: "16px"
}

const LinkPay = {
  fontWeight: "700",
  color: "black"
}

const ModCard = {
  width: "1200px",
  margin: "auto",
  position: "absolute",
  left: "90px"
}

const ModBody = {
  textAlign: "Center"
}

function AlertMod() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={button} onClick={handleShow}>
        PAY
      </Button>

      <Modal show={show} onHide={handleClose} style={ModCard}>
        <Modal.Body style={ModBody}>
          Your payment will be confirmed within 1 x 24 hours
          To see orders click <Link style={LinkPay} to="/payment-pending">Here</Link> thank you
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlertMod;