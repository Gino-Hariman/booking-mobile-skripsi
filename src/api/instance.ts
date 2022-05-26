import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.MAIN_HOST}`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json",
});

export default instance;
