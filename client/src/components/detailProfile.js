import '../css/profile.css'
import LoginNav from './LoginNav';
import { HeaderPayment, MiddlePayment, EndPayment } from "./payment";
import ProfileDrop from './modals/ProfileDd';

// Icon
import Name from '../images/profile/name.png';
import Mail from '../images/profile/mail.png';
import Map from '../images/profile/map.png';
import Phone from '../images/profile/phone.png';
import FotoProf from '../images/detailProfile.png';
import Booking from '../images/Group.png'
import Footer from './footer';

// Styling
const test = [
  {
    width: "100px",
    position: "absolute",
    top: "1248px",
    left: "1249px"
  },

  {
    position: "absolute",
    top: "300px",
    right: "1240px"
  }
]

const endPayment = [
  // .more-bottom
  {
    display: "flex",
    justifyContent: "end",
    marginRight: "118px"
  },

  // .more-bottom p:first-child
  {
    width: "165px",
    fontSize: "18px",
    fontWeight: "800",
  },

  // .more-bottom p:last-child
  {
    width: "165px",
    fontSize: "18px",
    fontWeight: "800",
    color: "#FF0000"
  }
]

const BioStyleA = {
  fontSize: "14px",
  fontWeight: "800",
  margin: "0"
}

const BioStyleB = {
  fontSize: "12px",
  fontWeight: "400",
  margin: "0"
}

const ProfileCard = () => {

  const nama = localStorage.getItem("nama")
  const phone = localStorage.getItem("phone")
  const email = localStorage.getItem("email")
  const address = localStorage.getItem("address")



  return (
    <div className='profile-card-wrap'>

      <div className="left-side">
        <h3>Personal Info</h3>

        <div className='name'>
          <div>
            <img src={Name} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{nama}</p>
            <p style={BioStyleB}>Full name</p>
          </div>
        </div>

        <div className='email'>
          <div>
            <img src={Mail} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{email}</p>
            <p style={BioStyleB}>Email</p>
          </div>
        </div>

        <div className='number'>
          <div>
            <img src={Phone} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{phone}</p>
            <p style={BioStyleB}>Mobile phone</p>
          </div>
        </div>

        <div className='address'>
          <div>
            <img src={Map} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{address}</p>
            <p style={BioStyleB}>Address</p>
          </div>
        </div>

      </div>

      <div className="right-side-prof">
        <div className='right-wrapper'>
          <img src={FotoProf} alt="profile" />
          <div>
            <button>Change Photo Profile</button>
          </div>
        </div>
      </div> 

    </div>
  )
}

let HomeLogin = '/name-home'

const DetailProfile = ({ isLogin, priceUser, doneCount, getCountry, getTitle }) => {
  return (
    <>
      <div className="profile-cont">
        <div className="profile-wrapper">

          <LoginNav test={test} Drop={ProfileDrop} isLogin={isLogin} admin={HomeLogin}/>

          <div className="profile-content">
            <ProfileCard />
          </div>

          <div className='payment-card-prof-wrap'>
            <div>
              <h2 style={{fontSize: "36px", fontWeight: "800", marginBottom: "25px"}}>History Trip</h2>
              <div className='payment-card-prof'>
                <HeaderPayment />
                <MiddlePayment source={{Booking}} getCountry={getCountry} getTitle={getTitle}/>
                <div className='bottom-payment-prof'>
                  <EndPayment styling={endPayment} priceUser={priceUser} doneCount={doneCount}/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailProfile;