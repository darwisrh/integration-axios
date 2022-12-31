import './loginModal.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Palm from './images/Palm2.png';
import Hibiscus from './images/hibiscus2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register Config
import { useMutation } from "react-query"
import { API } from "../../config/api"

function RegisterModal({ show, setShow, handleShow }) {

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: ""

  })

  const handleOnChange = (e) => {
    setForm({
      ...form,
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

      const body = JSON.stringify(form)

      // Memasukkan data user ke Database
      const response = await API.post('/register', body, config)
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  })

  // Close functions
  const handleClose = () => setShow(false);
  const handleTrue = () => setShow(true);

  return (
    <>
      <button style={{
        padding: "4px 34px",
        fontFamily: "Nunito Sans, sans-serif",
        background: "#FFAF00",
        color: "white",
        fontWeight: "600",
        border: "1px solid #FFAF00",
        borderRadius: "5px"
        }} onClick={handleShow}>
        Register
      </button>

      <Modal style={{
          width: "416px",
          position: "absolute",
          left: "480px",
          overflow: "hidden"
      }} className='modal-cont' show={show} onHide={handleClose}>

        <img style={{
          position: "absolute",
          width: "150px"
        }} src={Palm} alt="palm" />

        <img style={{
          position: "absolute",
          left: "331px",
          borderRadius: "0 5px"
        }} src={Hibiscus} alt="hibiscus" />

        <h2 style={{
          background: "white",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "800",
          margin: "40px 0"
        }}>Register</h2>
        <Modal.Body style={{
          padding: "0 20px"
        }}>
          <Form style={{overflow: "hidden"}} onSubmit={(e) => handleSubmit.mutate(e)}>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{
                fontWeight: "800",
                position: "relative",
                left: "20px"
              }}>Full Name</Form.Label>
              <Form.Control style={{
              background: "rgba(210, 210, 210, 0.25)",
              width: "340px",
              margin: "auto"
              
            }}
                type="text"
                autoFocus
                name="fullname"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{
                fontWeight: "800",
                position: "relative",
                left: "20px"
              }}>Email</Form.Label>
              <Form.Control style={{
              background: "rgba(210, 210, 210, 0.25)",
              width: "340px",
              margin: "auto"
              
            }}
                type="email"
                autoFocus
                name="email"
                onChange={handleOnChange}
              />
            </Form.Group>

              <Form.Group 
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
              <Form.Label style={{
                  fontWeight: "800",
                  position: "relative",
                  left: "20px"
                }}>Password</Form.Label>
                <Form.Control style={{
                background: "rgba(210, 210, 210, 0.25)",
                width: "340px",
                margin: "auto"
              }}
                  type="password"
                  autoFocus
                  name="password"
                  onChange={handleOnChange}
                  />
              </Form.Group>

              <Form.Group 
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
              <Form.Label style={{
                  fontWeight: "800",
                  position: "relative",
                  left: "20px"
                }}>Phone</Form.Label>
                <Form.Control style={{
                background: "rgba(210, 210, 210, 0.25)",
                width: "340px",
                margin: "auto"
              }}
                  type="number"
                  autoFocus
                  name="phone"
                  onChange={handleOnChange}
                  />
              </Form.Group>

              <Form.Group 
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
              <Form.Label style={{
                  fontWeight: "800",
                  position: "relative",
                  left: "20px",
                }}>Address</Form.Label>
                <Form.Control style={{
                background: "rgba(210, 210, 210, 0.25)",
                width: "340px",
                margin: "auto",
                resize: "none"
              }}
                  as="textarea"
                  autoFocus
                  name="address"
                  onChange={handleOnChange}
                  />

            <div style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0 15px"
            }}>
              <button style={{
                width: "340px",
                background: "#FFAF00",
                border: "1px solid #FFAF00",
                margin: "0 20px",
                height: "45px",
                borderRadius: "5px",
                color: "white",
                fontWeight: "800"
              }} onClick={() => {
                handleClose()
              }} type="submit">
                Register
              </button>
            </div>
              </Form.Group>


          </Form>
        </Modal.Body>

        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px"
        }}>
          <p style={{margin: "0", fontSize: "16px", color: "#a7a7a7", fontWeight: "800"}}>
            Don't have an account? ? Klik <a href="#" style={{
              fontSize: "16px", color: "#555555", fontWeight: "800", textDecoration: "none"
            }}>Here</a>
          </p>
        </div>
      </Modal>
    </>
  );
}

export default RegisterModal;