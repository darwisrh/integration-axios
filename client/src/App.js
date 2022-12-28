import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/detail";
import PaymentPending from "./components/paymentPending";
import DetailProfile from "./components/detailProfile";
import Error from "./components/errorHandle";
import PrivateRoute from "./components/privateRoute";

// Login
import LoginHome from "./components/LoginHome";
import LoginPayment from "./components/LoginPayment";
import LoginDetailTour from "./components/LoginDetailTour";

// Admin
import PrivateRouteAdmin from "./components/adminPrivateRoute";
import IncomeTransaction from "./components/admin/icomeTransaction";
import IncomeTrip from "./components/admin/incomeTrip";
import AddTrip from "./components/admin/addTrip";
import { useState } from "react";

// JSON
import cardTour from './components/json/Tours.json'
import incomeTrans from './components/json/IncomeTransaction.json'
let admin = {
  emailAd: "admin@gmail.com",
  passAd: "admin"
}

function App() {

  const [oldArray, setArray] = useState(
    [
      {
        country: "Australia",
        title: "6D/4N Fun Tassie Vacation ...",
        price: 12398000,
        image: "images/australia.png"
      },
    
      {
        country: "Japan",
        title: "8D/6N Wonderful Autum ...",
        price: 28999000,
        image: "images/japan.png"
      },
    
      {
        country: "South Korea",
        title: "6D/4N Exciting Summer in ...",
        price: 10288000,
        image: "images/korea.png"
      },
    
      {
        country: "Indonesia",
        title: "4D/3N Labuan Bajo Delight",
        price: 10488000,
        image: "images/indonesia.png"
      }
    ]
  )



  // Admin
  const [form, setForm] = useState({
    title: '',
    country: '',
    accomodation: '',
    transportation: '',
    eat: '',
    day: '',
    night: '',
    dateTrip: '',
    price: '',
    quota: '',
    description: '',
    image: ''
  })

  const [login, isLogin] = useState(false)
  const [logAdmin, isLogAdmin] = useState(false)


  // User
  const [getTitle, setGetTitle] = useState('')
  const [getCountry, setGetCountry] = useState()
  const [doneCount, setDoneCount] = useState(1)
  const [priceUser, setPriceUser] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home 
        isLogin={isLogin} 
        isLogAdmin={isLogAdmin} 
        cardTour={cardTour} 
        admin={admin}/>}></Route>
        <Route path="/detail/:id" element={<Detail 
        isLogin={isLogin} 
        isLogAdmin={isLogAdmin} 
        cardTour={cardTour} 
        admin={admin}/>} />
        <Route path="/*" element={<Error />} />

        {/* Login */}
        <Route element={<PrivateRoute login={login}/>}>
          <Route path="/payment-pending" element={<PaymentPending isLogin={isLogin} cardTour={cardTour} priceUser={priceUser} doneCount={doneCount} getCountry={getCountry} getTitle={getTitle}/>}/>
          <Route path="/detail-profile" element={<DetailProfile isLogin={isLogin} priceUser={priceUser} doneCount={doneCount} getCountry={getCountry} getTitle={getTitle}/>}/>
          <Route path="/name-home" element={<LoginHome isLogin={isLogin} cardTour={cardTour}/>}/>
          <Route path="/name-home/name-payment/:id" element={<LoginPayment isLogin={isLogin} cardTour={cardTour} priceUser={priceUser} doneCount={doneCount} getCountry={getCountry} getTitle={getTitle}/>}/>

          <Route path="/name-detail/:id" element={<LoginDetailTour isLogin={isLogin} cardTour={cardTour} setPriceUser={setPriceUser} setDoneCount={setDoneCount} setGetCountry={setGetCountry} getCountry={getCountry} setGetTitle={setGetTitle}/>} /> {/* Value */}

        </Route>

        {/* Admin */}
        <Route element={<PrivateRouteAdmin logAdmin={logAdmin} />}>
          <Route path="/income-transaction" element={<IncomeTransaction isLogAdmin={isLogAdmin} inTrans={incomeTrans} getCountry={getCountry} getTitle={getTitle}/>} />
          <Route path="/income-trip" element={<IncomeTrip isLogAdmin={isLogAdmin} oldArray={oldArray} form={form}/>} />
          <Route path="/income-trip/addtrip" element={<AddTrip form={form} setForm={setForm} setArray={setArray} oldArray={oldArray}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
