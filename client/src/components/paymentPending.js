import LoginNav from "./LoginNav";
import Footer from "./footer";
import { HeaderPayment, MiddlePayment, EndPayment } from "./payment";
import Booking from '../images/book.png'
import ProfileDrop from "./modals/ProfileDd";

const test = [
  {
    width: "100px",
    position: "absolute",
    top: "570px",
    left: "1249px"
  },

  {
    position: "absolute",
    top: "300px",
    right: "1240px"
  }
]

let HomeLogin = '/name-home'

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

const PaymentPending = ( {isLogin, cardTour, priceUser, doneCount, getCountry, getTitle} ) => {
  return (
    <>
      <LoginNav test={test} Drop={ProfileDrop} isLogin={isLogin} admin={HomeLogin} cardTour={cardTour}/>
      <div className="payment-cont">
        <div className="payment-wrapper">
          <HeaderPayment />
          <MiddlePayment source={{Booking}} getCountry={getCountry} getTitle={getTitle}/>
          <EndPayment styling={endPayment} priceUser={priceUser} doneCount={doneCount}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentPending;