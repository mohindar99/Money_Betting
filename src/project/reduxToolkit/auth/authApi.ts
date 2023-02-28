import axiosInstance from "@/project/utility/AxiosInterceptors";
import app from "@/project/utility/AxiosInterceptors";
import { Constants } from "@/project/utility/constants";
import { Cookie } from "@mui/icons-material";
import axios from "axios";
import Cookies from "universal-cookie";
import { UserType } from "./authTypes";

const queryConvertor = (obj: any) => {
  const query = Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");

  return query;
};

const cookies = new Cookies();
export const authControlApi = {
  signupEmail: async (reqDTo: any): Promise<UserType> => {
    const { data } = await axios.post(
      Constants.Api.auth.signupWithEmail,
      reqDTo
    );
    return data;
  },
  signupWallet: async (reqDTo: any): Promise<UserType> => {
    const { data } = await axios.post(
      Constants.Api.auth.signupWithWallet,
      reqDTo
    );
    return data;
  },
  verifyUsername: async (reqDTo: any): Promise<UserType> => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/verifyUsername/${reqDTo}`
    );
    return data;
  },
  verifyEmail: async (token: any): Promise<UserType> => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/verifyEmail/${token}`
    );
    return data;
  },
  loginEmail: async (reqDTo: any): Promise<UserType> => {
    const { data } = await axios.post(
      Constants.Api.auth.loginWithEmail,
      reqDTo
    );

    if (data) {
      cookies.set("Authorization", data.token);
      cookies.set("user", data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    return data;
  },
  loginWallet: async (reqDTo: any): Promise<UserType> => {
    const { data } = await axios.post(
      Constants.Api.auth.loginWithWallet,
      reqDTo
    );
    if (data) {
      cookies.set("Authorization", data.token);
      cookies.set("user", data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    return data;
  },
  forgetPassword: async (email: any): Promise<UserType> => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/forgotPassword/${email}`
    );
    return data;
  },
  resetPassword: async (reqDTo: any, token: string): Promise<UserType> => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/resetPassword/${token}`,
      reqDTo
    );
    return data;
  },
  userDetails: async (id: string): Promise<any> => {
    try {
      const { data } = await axiosInstance.get(`/v1/auth/userDetails/${id}`);
      return data;
    } catch (error) {
      console.log("error in api call", error);
    }
  },
  logout: async (): Promise<UserType> => {
    const { data } = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/logout`
    );
    return data;
  },
};
