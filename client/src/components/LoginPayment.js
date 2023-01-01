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
import { useContext } from "react";
import { UserContext } from "../context/userContext";

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

const LoginPayment = () => {

  // Mengambil data transaction berdasarkan id user
  const [state] = useContext(UserContext)

  const {data: transaction} = useQuery('transactionCache', async () => {
    const response = await API.get(`/transactions`)
    return response.data.data
  })

  const transactionFilter = transaction?.filter(user => {
    if (user?.user_id == state?.user.id) {
      return user
    }
  })

  return (
    <>
      <LoginNav test={test} Drop={ProfileDrop} home={'/home'}/>
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
              />
              <EndPayment 
              styling={endPayment}
              qtyCounter={trans?.trip.qtycounter}
              price={trans?.trip.price}
              username={trans?.user.fullname}
              phone={trans?.user.phone}
              />
            </div>
          </div>
          <div className='buttons'>
            <div>
              <AlertMod />
            </div>
          </div>
        </div>
        ))
      }
      <Footer />
    </>
  )
}

export default LoginPayment;