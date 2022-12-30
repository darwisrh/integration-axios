import '../css/header.css'
import LoginModal from './modals/loginModal';
import RegisterModal from './modals/registerModal';
import { Link } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons
import Hibiscus from "../images/hibiscus.png"
import Palm from "../images/palm.png"
import Vector from "../images/Vector.png"
import Icon from "../images/Icon.png"

const buttonStyle = {
  background: "transparent",
  width: "140px",
  height: "35px",
  color: "white",
  border: "1px solid white",
  borderRadius: "5px"
}

const NavigationBar = (style) => {
    // Register Modal
    const [showR, setShowR] = useState(false);
    const handleShow = () => setShowR(true);
  
    // Login Modal
    const [show, setShow] = useState()
    const handleClose = () => setShow(false);
    const handleShowL = () => setShow(true);
    // Login Modal

  return (
    <header className="header">
        <div className="search">

        <img style={{
          position: "absolute",
          top: "200px",
          left: "1230px"
        }} src={Hibiscus} alt="hibiscus" />

        <img style={style.test[0]} src={Vector} alt="vector" />

        <img style={style.test[1]} src={Palm} alt="palm" />

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
                  isLogin={style.isLogin}
                  handleShowL={handleShowL}
                  isLogAdmin={style.isLogAdmin}
                  admin={style.admin}
                  /></li>
                <li><RegisterModal 
                  show={showR} 
                  setShow={setShowR} 
                  handleShow={handleShow}
                  handleShowL={handleShowL}
                  setShowL={setShow}
                  /></li>
              </ul>
            </div>
          </nav>
        </div>
    </header>
  )
}

export default NavigationBar;