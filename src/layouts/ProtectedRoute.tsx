import { Outlet } from "react-router-dom";

import { selectIsAuthenticated } from "@/app/authSlice";
import { useAppSelector } from "@/app/store";
import Login from "@/pages/login/Login";

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (!isAuthenticated) {
    return <Login />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
