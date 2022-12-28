import LoginHome from "./LoginHome"
import { Link } from "react-router-dom"

// Icons
import Hibiscus from "../images/hibiscus.png"
import Palm from "../images/palm.png"
import Vector from "../images/Vector.png"
import Icon from '../images/Icon.png'

const LoginNav = ({ test, Drop, isLogin, admin, isLogAdmin, cardTour }) => {

  return (
    <header className="header">
      <div className="search">

      <img style={{
        position: "absolute",
        top: "200px",
        left: "1230px"
      }} src={Hibiscus} alt="hibiscus" />

      <img style={test[0]} src={Vector} alt="vector" />

      <img style={test[1]} src={Palm} alt="palm" />

        <nav>
          <div className="left-side">
            <ul>
              <li><Link to={admin} element={LoginHome}><img src={Icon} alt="Icon" /></Link></li>
            </ul>
          </div>

          <div className="right-side">
            <ul>
              <Drop isLogin={isLogin} isLogAdmin={isLogAdmin} cardTour={cardTour}/>
            </ul>
          </div>
        </nav>

      </div>
  </header>
  )
}

export default LoginNav;