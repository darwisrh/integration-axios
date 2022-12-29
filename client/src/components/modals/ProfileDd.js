import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import DetailProfile from '../detailProfile';
import LoginPayment from '../LoginPayment';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

// Icons
import Profile from './images/profile.png'
import User from './images/user.png'
import Pay from './images/bill.png'
import Logout from './images/logout.png'
import Polygon from './images/polygon.png'


const dropDown = {
  width: "200px",
  padding: "20px",
  marginTop: "24px"
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
  bottom: "154px",
  left: "124px"
}

function ProfileDrop() {

  const navigate = useNavigate()
  const [state] = useContext(UserContext)
  const hanldleClick = () => {
    state.isLogin = false
    navigate('/')
    localStorage.removeItem('token')
  }
  console.log(state);


  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" style={drop}>
          <img src={Profile} alt="profile" />
        </Dropdown.Toggle>

        <Dropdown.Menu style={dropDown}>
            <img style={polygon} src={Polygon} />
          <Dropdown.Item style={dropItem} href="#/action-1">
            <Link style={dropItem} to="/detail-profile" element={DetailProfile}>
              <img style={img} src={User} alt="user" />
              <p style={fonts}>Profile</p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item style={dropItem} href="#/action-2">
            <Link style={dropItem} to={`/name-home/name-payment/:id`} element={LoginPayment}>
              <img style={img} src={Pay} alt="user" />
              <p style={fonts}>Pay</p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider style={dropDiv}/>
          <Dropdown.Item style={dropItem} onClick={hanldleClick}>
            <div style={dropItem}>
              <img style={img} src={Logout} alt="user" />
              <p style={fonts}>Logout</p>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ProfileDrop;