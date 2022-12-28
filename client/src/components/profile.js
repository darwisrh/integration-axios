import '../css/profile.css';
import NavigationBar from "./navbar";
import { HeaderPayment, MiddlePayment, EndPayment } from './payment';
import Footer from './footer';

// Icon
import Name from '../images/profile/name.png';
import Mail from '../images/profile/mail.png';
import Map from '../images/profile/map.png';
import Phone from '../images/profile/phone.png';
import FotoProf from '../images/detailProfile.png';


const test = [
  {
    width: "100px",
    position: "absolute",
    top: "1194px",
    left: "1249px"
  },

  {
    position: "absolute",
    top: "300px",
    right: "1240px"
  }
]

const moreBottom = [

  // .more-bottom
  {
    display: "flex",
    justifyContent: "end"
  },

  // .more-bottom p
  {
    width: "165px",
    marginBottom: "0"
  },

  // .more-bottom p:first-child
  {
    fontSize: "18px",
    fontWeight: "800",
  },

  // .more-bottom p:last-child
  {
    fontSize: "18px",
    fontWeight: "800",
    color: "#FF0000",
    marginRight: "36px"
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
  return (
    <div className='profile-card-wrap'>

      <div className="left-side">
        <h3>Personal Info</h3>

        <div className='name'>
          <div>
            <img src={Name} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>Penduduk Jupiter</p>
            <p style={BioStyleB}>Full name</p>
          </div>
        </div>

        <div className='email'>
          <div>
            <img src={Mail} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>makhlukaneh@gmail.com</p>
            <p style={BioStyleB}>Email</p>
          </div>
        </div>

        <div className='number'>
          <div>
            <img src={Phone} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>0812-8623-8911</p>
            <p style={BioStyleB}>Mobile phone</p>
          </div>
        </div>

        <div className='address'>
          <div>
            <img src={Map} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>Perumahan Permata Bintaro Residence C-3</p>
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


const Profile = () => {
  return (
    <>
    <div className="profile-cont">
      <div className="profile-wrapper">
        <NavigationBar test={ test }/>

        <div className="profile-content">
          <ProfileCard />
        </div>

        <div className='payment-card-prof-wrap'>
          <div className='payment-card-prof'>
            <HeaderPayment />
            <MiddlePayment />
            <div className='bottom-payment-prof'>
              <EndPayment test={moreBottom}/>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  )
}