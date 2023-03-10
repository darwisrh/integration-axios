import './loginModal.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Palm from './images/Palm2.png';
import Hibiscus from './images/hibiscus2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterModal({ show, setShow, handleShow }) {

  // Register Handle
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if( !nama || !email || !password || !phone || !address) {
      handleTrue()
      return alert("Please fill all the field")
    } else {
      localStorage.setItem("nama", JSON.stringify(nama))
      localStorage.setItem("email", JSON.stringify(email))
      localStorage.setItem("password", JSON.stringify(password))
      localStorage.setItem("phone", JSON.stringify(phone))
      localStorage.setItem("address", JSON.stringify(address))
      console.log("Data saved")
    }
    
  }

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
          <Form style={{overflow: "hidden"}} onSubmit={handleSubmit}>

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
                onChange={e => setNama(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={e => setAddress(e.target.value)}
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