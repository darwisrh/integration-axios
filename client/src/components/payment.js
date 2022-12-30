import '../css/payment.css'
import NavigationBar from "./navbar"
import Icon from '../images/Icon.png'
import AlertMod from './modals/alert'
import Footer from './footer'
import Booking from '../images/book.png'

const MidStyle = {
  fontSize: "18px",
  fontWeight: "800",
  margin: "0px"
}

const MidStyleB = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#959595",
  margin: "0"
}

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

export const HeaderPayment = () => {
  return (
    <div className='payment-header'>
      <div className='left-top'>
          <img src={Icon} alt="icon" />
      </div>

      <div className='right-top'>
        <div>
          <p className='head'>Booking</p>
          <div className='time'>
            <p>Saturday, </p>
            <p>22 July 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MiddlePayment = ({booking, getCountry, getTitle, day, night, transportation, datetrip, accomodation}) => {
  return (
    <div className='middle-payment'>

      <div className='mid-payment-a'>
        <p>{getTitle}</p>
        <p>{getCountry}</p>
        <p>Waiting Payment</p>
      </div>

      <div className='mid-payment-b'>
        <div>
          <p style={MidStyle}>Date Trip</p>
          <p style={MidStyleB}>{datetrip}</p>
        </div>
        <div>
          <p style={MidStyle}>Accomodation</p>
          <p style={MidStyleB}>{accomodation}</p>
        </div>
      </div>

      <div className='mid-payment-c'>
        <div>
          <p style={MidStyle}>Duration</p>
          <p style={MidStyleB}>{day} Day {night} Night</p>
        </div>
        <div>
          <p style={MidStyle}>Transporartion</p>
          <p style={MidStyleB}>{transportation}</p>
        </div>
      </div>

      <div className='mid-payment-d'>
        <img src={booking} alt="booking" />
        <p>{'source.detail'}</p>
      </div>

    </div>
  )
}

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
  },

  {
    marginLeft: "90px"
  }


]

export const EndPayment = (props) => {
  console.log(props);
  return (
    <div>
      
      <div className='end-pay'>
        <div className='top'>
          <p>No</p>
          <p>Full Name</p>
          <p>Gender</p>
          <p>Phone</p>
        </div>
        <hr />
        <div className='bottom'>
          <p>1</p>
          <p>Penduduk Jupiter</p>
          <p>Male</p>
          <p>083896833112</p>
          <p>Qty                  :</p>
          <p>{props.qtyCounter}</p>
        </div>
        <hr />
        <div style={props.styling[0]} className='more-bottom'>
          <p style={props.styling[1]}>Total                :</p>
          <p style={props.styling[2]}>IDR. {props.price}</p>
        </div>
      </div>

    </div>
  )
}

const PaymentTour = () => {
  return (
    <>
      <NavigationBar test={test}/>
      <div className="payment-cont">
        <div className="payment-wrapper">
          <HeaderPayment />
          <MiddlePayment source={{Booking}}/>
          <EndPayment styling={endPayment}/>
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

export default PaymentTour;