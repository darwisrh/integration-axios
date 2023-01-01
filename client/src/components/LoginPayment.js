import LoginNav from "./LoginNav";
import { HeaderPayment, MiddlePayment, EndPayment } from "./payment";
import AlertMod from './modals/alert'
import Footer from './footer'
import Booking from '../images/book.png'
import ProfileDrop from "./modals/ProfileDd";

// Fetching Data
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";
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

  const handleBuy = useMutation(async (data) => {

// Insert transaction data
const response = await API.post("/transaction", config);

const token = response.data.token;

window.snap.pay(token, {
  onSuccess: function (result) {
    /* You may add your own implementation here */
    console.log(result);
    history.push("/profile");
  },
  onPending: function (result) {
    /* You may add your own implementation here */
    console.log(result);
    history.push("/profile");
  },
  onError: function (result) {
    /* You may add your own implementation here */
    console.log(result);
  },
  onClose: function () {
    /* You may add your own implementation here */
    alert("you closed the popup without finishing the payment");
  },
});

  })

useEffect(() => {
  //change this to the script source you want to load, for example this is snap.js sandbox env
  const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  //change this according to your client-key
  const myMidtransClientKey = "SB-Mid-client-zXst3wmknvMvtu6d";

  let scriptTag = document.createElement("script");
  scriptTag.src = midtransScriptUrl;
  // optional if you want to set script attribute
  // for example snap.js have data-client-key attribute
  scriptTag.setAttribute("data-client-key", myMidtransClientKey);

  document.body.appendChild(scriptTag);
  return () => {
    document.body.removeChild(scriptTag);
  };
}, []);


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
            <div >
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