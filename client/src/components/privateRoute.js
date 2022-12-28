import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ login }) => {
  const isAuth = login
  return isAuth ? <Outlet /> : <Navigate to='/home' />
}

export default PrivateRoute;