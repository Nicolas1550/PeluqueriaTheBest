import { useEffect } from "react";
import {
  checkAuthentication,
  logoutUser,
} from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

export const useAuthToken = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, window.location.pathname); 
      dispatch(checkAuthentication());
    }
  }, [dispatch]);

  const logout = async () => {
    await dispatch(logoutUser());
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000";
  };

  return { logout };
};
