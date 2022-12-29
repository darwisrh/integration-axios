import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/errorHandle";

// Admin Routes
import IncomeTransaction from "./components/admin/icomeTransaction";

// Login User
import LoginHome from "./components/LoginHome";

// Auth
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { setAuthToken, API } from "./config/api";

// Masukkan token 
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {

  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)

  useEffect(() => {
    if(localStorage.token) {
      setAuthToken(localStorage.token)
    }

    // Redirect Auth
    if(state.isLogin === false) {
      navigate('/')
    } else {
      if(state.user.role === 'admin') {
        navigate('/income-transaction')
      } else if (state.user.role === 'user') {
        navigate('/home')
      }
    }
  }, [state])

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth')
      console.log(response)

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<Error />} />

        {/* User Login */}
        <Route path="/home" element={<LoginHome />}/>

        {/* Admin */}
        <Route path="/income-transaction" element={<IncomeTransaction />}/>
      </Routes>
  );
}

export default App;
