import { Outlet } from "react-router-dom";

const PrivateRouteAdmin = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default PrivateRouteAdmin;