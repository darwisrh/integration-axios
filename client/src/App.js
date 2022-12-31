import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/errorHandle";
import Detail from "./components/detail";
import { useNavigate } from "react-router-dom";

// Admin Routes
import PrivateRouteAdmin from "./components/adminPrivateRoute";
import IncomeTransaction from "./components/admin/icomeTransaction";
import AddTrip from "./components/admin/addTrip";
import IncomeTrip from "./components/admin/incomeTrip";
import AddCountry from "./components/admin/addcountry";

// User Routes
import PrivateRoute from "./components/privateRoute";
import LoginHome from "./components/LoginHome";
import LoginPayment from "./components/LoginPayment";
import LoginDetailTour from "./components/LoginDetailTour";
import DetailProfile from "./components/detailProfile";

// Auth
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { setAuthToken } from "./config/api";
import { API } from "./config/api";

// Masukkan token 
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {

    // Redirect Auth
    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.role === 'admin') {
        navigate('/income-transaction');
      } else if (state.user.role === 'user') {
        navigate('/home');
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth')

      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR'
        })
      }

      // Mendapatkan data user
      let payload = response.data.data
      
      // Mengambil token dari localstorage
      payload.token = localStorage.token
      // Mengirim data ke useContext
      dispatch({
        type: 'USER_SUCCES',
        payload,
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(localStorage.token) {
      checkUser()
    }
  }, [])

  return (
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/trip/:id" element={<Detail />} />

        {/* User Login */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<LoginHome />}/>
          <Route path="/l-trip/:id" element={<LoginDetailTour />} />
          <Route path="/payment/:id" element={<LoginPayment />} />
          <Route path="/detail-profile/:id" element={<DetailProfile />} />
        </Route>

        {/* Admin */}
        {/* <Route element={<PrivateRouteAdmin />}> */}
          <Route path="/income-transaction" element={<IncomeTransaction />}/>
          <Route path="/addtrip" element={<AddTrip />}/>
          <Route path="/income-trips" element={<IncomeTrip />} />
          <Route path="/addcountry" element={<AddCountry />} />
        {/* </Route> */}
      </Routes>
  );
}

export default App;
