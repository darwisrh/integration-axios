import LoginHome from "./LoginHome"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

// Icons
import Hibiscus from "../images/hibiscus.png"
import Palm from "../images/palm.png"
import Vector from "../images/Vector.png"
import Icon from '../images/Icon.png'

const LoginNav = ({ Drop, isLogin, cardTour }) => {

  // Check Auth
  const navigate = useNavigate()

  const [state] = useContext(UserContext)
  const checkAuth = () => {
    if (state.isLogin === true) {
      navigate('/')
    }
  }

  checkAuth()
  console.log(state)

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
              <li><Link to='/home' element={LoginHome}><img src={Icon} alt="Icon" /></Link></li>
            </ul>
          </div>

          <div className="right-side">
            <ul>
              <Drop isLogin={isLogin} cardTour={cardTour}/>
            </ul>
          </div>
        </nav>

      </div>
  </header>
  )
}

export default LoginNav;