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

// Fetching
import { API } from '../config/api';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useQuery } from 'react-query';

// Styling
// const test = [
//   {
//     width: "100px",
//     position: "absolute",
//     top: "1248px",
//     left: "1249px"
//   },

//   {
//     position: "absolute",
//     top: "300px",
//     right: "1240px"
//   }
// ]

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

  const [state] = useContext(UserContext)

  let {data: user} = useQuery('profileCache', async () => {
    const response = await API.get(`/user/${state?.user.id}`)
    return response.data.data
  })



  return (
    <div className='profile-card-wrap'>

      <div className="left-side">
        <h3>Personal Info</h3>

        <div className='name'>
          <div>
            <img src={Name} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{user?.fullname}</p>
            <p style={BioStyleB}>Full name</p>
          </div>
        </div>

        <div className='email'>
          <div>
            <img src={Mail} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{user?.email}</p>
            <p style={BioStyleB}>Email</p>
          </div>
        </div>

        <div className='number'>
          <div>
            <img src={Phone} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{user?.phone}</p>
            <p style={BioStyleB}>Mobile phone</p>
          </div>
        </div>

        <div className='address'>
          <div>
            <img src={Map} alt="" />
          </div>
          <div>
            <p style={BioStyleA}>{user?.address}</p>
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

let home = '/home'

const DetailProfile = () => {

  const [state] = useContext(UserContext)

  let {data: transactionScs} = useQuery('transactionSucces', async () => {
    const response = await API.get('/transactions')
    return response.data.data
  })

  const transactionFilter = transactionScs?.filter(trans => {
    if(trans?.status == 'success' && trans?.user_id == state?.user.id) {
      return trans
    }
  })

  return (
        <>
      <LoginNav Drop={ProfileDrop} home={'/home'}/>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
      }}>
        <ProfileCard />
      </div>
      {
        transactionFilter?.map(trans => (
          <div>
          <div className="payment-cont">
            <div className="payment-wrapper">
              <HeaderPayment/>
              <MiddlePayment 
              booking={Booking} 
              getCountry={trans?.trip.country.name} 
              getTitle={trans?.trip.title}
              day={trans?.trip.day}
              night={trans?.trip.night}
              transportation={trans?.trip.transportation}
              datetrip={trans?.trip.datetrip}
              accomodation={trans?.trip.accomodation}
              status={trans?.status}
              />
              <EndPayment 
              styling={endPayment}
              qtyCounter={trans?.counterqty}
              price={trans?.total}
              username={trans?.user.fullname}
              phone={trans?.user.phone}
              />
            </div>
          </div>
        </div>
        ))
      }
      <Footer />
    </>
  )
}

export default DetailProfile;