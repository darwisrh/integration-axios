import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteAdmin = ({ logAdmin }) => {
  const isAuth = logAdmin
  return isAuth ? <Outlet /> : <Navigate to='/home' />
}

export default PrivateRouteAdmin;