import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCountryMod() {

  const [country, setCountry] = useState({
    name: ""
  })

  const handelChange = (e) => {
    setCountry({
      ...country,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Mengkonfigurasi tipe konten
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(country)

      // Memasukkan data user ke Database
      const response = await API.post('/country', body, config)
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  })

  // =======================

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{background: "#FFAF00", border: "1px solid #FFAF00", fontWeight: "800", color: "white"}} onClick={handleShow}>
        Add Country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={e => handleSubmit.mutate(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Input Country Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Country Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="country"
                  name="name"
                  autoFocus
                  onChange={handelChange}
                />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button 
            style={{
              background: "#FFAF00",
              border: "1px solid #FFAF00", 
              fontWeight: "800", 
              color: "white"}}
              type="submit"
              >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddCountryMod;