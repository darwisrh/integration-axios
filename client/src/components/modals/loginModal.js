import './loginModal.css'
import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Palm from './images/Palm2.png';
import Hibiscus from './images/hibiscus2.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fetching Stuff
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import { UserContext } from '../../context/userContext';

function LoginModal({show, setShow, handleClose, handleShowR, style, value, handleShowL}) {

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)

  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: ""
  })
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Config
      const config = {
        header: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(form)
      const response = await API.post('/login', body, config)

      // Checking
      if (response?.status === 200){
        dispatch({
          type: 'LOGIN_SUCCES',
          payload: response.data.data,
        })
      }

      if (response.data.data.role === 'user') {
        navigate('/home')
      } else {
        navigate('/')
      }
    } catch(err) {
      console.log(err);
    }
  })

  return (
    <>
      <button style={style} className='login-button' onClick={handleShowL}>
        {value}
      </button>

      <Modal style={{
          width: "416px",
          height: "516px",
          position: "absolute",
          left: "488px",
          overflow: "hidden"
      }} className='modal-cont' show={show} onHide={handleClose}>

        <img style={{
          position: "absolute",
          width: "150px"
        }} src={Palm} alt="palm" />

        <img style={{
          position: "absolute",
          left: "348px",
          borderRadius: "0 5px"
        }} src={Hibiscus} alt="hibiscus" />

        <h2 style={{
          background: "white",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "800",
          margin: "40px 0"
        }}>Login</h2>
        <Modal.Body style={{
          padding: "0 20px"
        }}>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
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
                onChange={handleChange}
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
                onChange={handleChange}
                />
            </Form.Group>

            <button style={{
              width: "340px",
              background: "#FFAF00",
              border: "1px solid #FFAF00",
              margin: "0 20px",
              height: "45px",
              borderRadius: "5px",
              color: "white",
              fontWeight: "800"
            }} type="submit">
              Login
            </button>
          </Form>
        </Modal.Body>
        <div style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0 15px"
        }}>

        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px"
        }}>
          <p style={{
            margin: "0", 
            fontSize: "16px", 
            color: "#a7a7a7", 
            fontWeight: "800",
            display: "flex"
            }}>
            Don't have an account? ? Klik 
            <p onClick={() => {
              handleShowR()
              handleClose()
            }} style={{cursor: "pointer", margin: "0 0 0 6px"}}>Here</p>
          </p>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;