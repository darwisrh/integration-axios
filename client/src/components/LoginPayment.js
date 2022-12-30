import LoginNav from "./LoginNav";
import { HeaderPayment, MiddlePayment, EndPayment } from "./payment";
import AlertMod from './modals/alert'
import Footer from './footer'
import Booking from '../images/book.png'
import ProfileDrop from "./modals/ProfileDd";

// Fetching Data
import { API } from "../config/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const test = [
  {
    width: "100px",
    position: "absolute",
    top: "716px",
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
    justifyContent: "end"
  },

  // .more-bottom p:first-child
  {
    width: "165px",
    marginBottom: "0",
    fontSize: "18px",
    fontWeight: "800",
  },

  // .more-bottom p:last-child
  {
    width: "165px",
    marginBottom: "0",
    fontSize: "18px",
    fontWeight: "800",
    color: "#FF0000",
    marginRight: "36px"
  }


]

let HomeLogin = '/name-home'

const LoginPayment = ({ isLogin }) => {

  const tripId = useParams()

  let {data: payment} = useQuery('paymentCache', async () => {
    const response = await API.get(`/trip/${tripId.id}`)
    return response.data.data
  })
  console.log(payment);

  return (
    <>
      <LoginNav test={test} Drop={ProfileDrop} isLogin={isLogin} admin={HomeLogin}/>
      <div className="payment-cont">
        <div className="payment-wrapper">
          <HeaderPayment/>
          <MiddlePayment 
          booking={Booking} 
          getCountry={payment?.country.name} 
          getTitle={payment?.title}
          day={payment?.day}
          night={payment?.night}
          transportation={payment?.transportation}
          datetrip={payment?.datetrip}
          accomodation={payment?.accomodation}
          />
          <EndPayment 
          styling={endPayment}
          qtyCounter={payment?.qtyCounter}
          price={payment?.price}
          />
        </div>
      </div>
      <div className='buttons'>
        <div>
          <AlertMod />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoginPayment;