import axiosInstance from "@/project/utility/AxiosInterceptors";
import app from "@/project/utility/AxiosInterceptors";
import { Constants } from "@/project/utility/constants";
import { Cookie } from "@mui/icons-material";
import axios from "axios";
import Cookies from "universal-cookie";
// import { UserType } from "./authTypes";

const queryConvertor = (obj: any) => {
  const query = Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");

  return query;
};

export const serviceWorkersApi = {
  cryptoMarketCapApi: async (): Promise<any> => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/crypto/getCryptoPrice`);
    return data;
  },
};
