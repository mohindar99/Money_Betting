import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";
import { authControlApi } from "../reduxToolkit/auth/authApi";

const cookies = new Cookies();
// const token =
//   typeof window !== "undefined"
//     ? JSON.parse(window.localStorage.getItem("token") || "")
//     : false;
export const logoutUser = async (explicitlyCallLogout = false) => {
  try {
    if (explicitlyCallLogout) {
      await authControlApi.logout();
    }
    localStorage.removeItem("user");
    localStorage.removeItem("Authorization");
    cookies.remove("token");
    cookies.remove("Authorization");
    cookies.remove("user");
    return true;
  } catch (error) {
    return false;
  }
};

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
});

export const token = cookies.get("Authorization")
  ? cookies.get("Authorization")
  : null;
axiosInstance.interceptors.response.use(
  function (response) {
    // Allowing BI(log) calls even if GOOGLE_PROFILE not set for the user in local storage...
    if (!token) {
      // todo
      // dispatch(setUserGoogleProfile(null));
      logoutUser();
      return Promise.reject("user is logged out");
    }
    return response;
  },
  function (error) {
    // status will be unavailable if server is down
    const status = error.response ? error.response.status : -1;
    if (!error.response) {
      console.error("Hush backend might be down");
    }
    switch (status) {
      case 401:
        // console.error("401 error: unauthorised access", error ? error.response : error);
        logoutUser();
        break;
      case 403:
        //Todo : show a popup to user explaining that he doesn't have suffiicient privileges to see the resource
        console.error(
          "403 error: forbidden access",
          error ? error.response : error
        );
        break;
      default:
        console.error("unknown XHR error\n", error);
        break;
    }
    // Do something with response error
    return Promise.reject(error);
  }
);
axiosInstance.defaults.headers.common["Authorization"] = token;
export default axiosInstance;
