import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const RequireAuthentication = () => {
  let { auth } = useAuth();
  const location = useLocation;
  return auth?.username ? <Outlet /> : <Navigate to="/login" />;
};
export default RequireAuthentication;
