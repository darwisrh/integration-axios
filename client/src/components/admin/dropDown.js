import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import IncomeTrip from './incomeTrip';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons
import Profile from './images/profile.png'
import Logout from './images/logout.png'
import Polygon from './images/polygon.png'
import Journey from './images/journey.png'
import Country from './images/countries.png'

const dropDown = {
  width: "200px",
  padding: "10px 20px",
  marginTop: "35px"
}

const drop = {
  background: "transparent",
  border: "0px"
}

const dropItem = {
  marginLeft: "0",
  color: "black",
  display: "flex",
  alignItem: "center"
}

const fonts = {
  fontSize: "18px",
  fontWeight: "900",
  marginBottom: "0",
  display: "flex",
  position: "relative",
  top: "2px"
}

const img = {
  width: "30px",
  height: "30px",
  marginRight: "20px"
}

const dropDiv = {
  width: "200px",
  position: "relative",
  right: "20px",
  border: "1px solid #A8A8A8"
}

const polygon = {
  position: "absolute",
  bottom: "145px",
  left: "122px"
}


function AdminDrop() {

  const navigate = useNavigate()
  const [state] = useContext(UserContext)
  const handleClick = () => {
    state.isLogin = false
    navigate('/')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }


  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" style={drop}>
          <img src={Profile} alt="profile" />
        </Dropdown.Toggle>

        <Dropdown.Menu style={dropDown}>
            <img style={polygon} src={Polygon} />
          <Dropdown.Item style={dropItem}>
            <Link style={dropItem} to="/income-trips" element={IncomeTrip}>
              <img style={img} src={Journey} alt="user" />
              <p style={fonts}>Trip</p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item style={dropItem} href="#/action-2">
            <Link style={dropItem} to="/addcountry">
              <img style={img} src={Country} alt="user" />
              <p style={fonts}>Country</p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider style={dropDiv}/>
          <Dropdown.Item style={dropItem} onClick={handleClick}>
            <Link style={dropItem}>
              <img style={img} src={Logout} alt="user" />
              <p style={fonts}>Logout</p>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default AdminDrop;