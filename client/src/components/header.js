import '../css/header.css';
import Icon from '../images/Icon.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './cards';
import LoginModal from './modals/loginModal';
import RegisterModal from './modals/registerModal';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons
import Percent from '../images/Icon/Percent.png';
import Outline from '../images/Icon/Outline.png';
import PersonA from '../images/Icon/PersonA.png';
import PersonB from '../images/Icon/PersonB.png';
import Hibiscus from "../images/hibiscus.png"
import Palm from "../images/palm.png"
import Vector from "../images/Vector.png"

const buttonStyle = {
  background: "transparent",
  width: "140px",
  height: "35px",
  color: "white",
  border: "1px solid white",
  borderRadius: "5px"
}

const Header = () => {

  // Register Modal
  const [showR, setShowR] = useState(false);
  const handleShow = () => setShowR(true);

  // Login Modal
  const [show, setShow] = useState()
  const handleClose = () => setShow(false);
  const handleShowL = () => setShow(true);
  // Login Modal

  return (
    <>
      <header className="header">
          <div className="search">

          <img style={{
            position: "absolute",
            top: "450px",
            left: "1230px"
          }} src={Hibiscus} alt="hibiscus" />

          {/* <img style={{
            position: "absolute",
            top: "1625px",
            left: "1225px"
          }} src={Vector} alt="vector" /> */}

          <img style={{
            position: "absolute",
            top: "800px",
            right: "1230px"
          }} src={Palm} alt="palm" />

            <nav>
              <div className="left-side">
                <ul>
                  <li><Link to='/' element={Home}><img src={Icon} alt="Icon" /></Link></li>
                </ul>
              </div>

              <div className="right-side">
                <ul>
                  <li><LoginModal 
                    show={show} 
                    setShow={setShow} 
                    handleClose={handleClose} 
                    handleShowR={handleShow} 
                    style={buttonStyle} 
                    value="Login"
                    handleShowL={handleShowL}
                    /></li>
                  <li><RegisterModal 
                    show={showR} 
                    setShow={setShowR} 
                    handleShow={handleShow}
                    /></li>
                </ul>
              </div>
            </nav>

            <div className="welcome-text">
              <p>Explore</p>
              <p>Your amazing city together</p>
            </div>

            <div className="search-input">
              <p>Find great place to holiday</p>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text className="search-button">Search</InputGroup.Text>
              </InputGroup>
            </div>

            <div className="card-group">
              <Cards icon={Percent} title="Best Price Guarantee"/>
              <Cards icon={Outline} title="Travellers Love Us"/>
              <Cards icon={PersonB} title="Best Travel Agent"/>
              <Cards icon={PersonA} title="Our Dedicated Support"/>
            </div>

          </div>
      </header>
    </>
  )
}

export default Header