import LoginHome from "./LoginHome"
import { Link } from "react-router-dom"

// Icons
import Icon from '../images/Icon.png'

const LoginNav = ({ Drop, isLogin, home }) => {
  return (
    <header className="header">
      <div className="search">

        <nav>
          <div className="left-side">
            <ul>
              <li><Link to={home} element={LoginHome}><img src={Icon} alt="Icon" /></Link></li>
            </ul>
          </div>

          <div className="right-side">
            <ul>
              <Drop isLogin={isLogin} />
            </ul>
          </div>
        </nav>

      </div>
  </header>
  )
}

export default LoginNav;