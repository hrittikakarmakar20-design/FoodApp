import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Protectedroute = () => {
  const isAuth = Cookies.get("loginData");

  useEffect(() => {
    if (!isAuth) {
      toast.error("Please Login to access this page.");
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default Protectedroute;
