import axios from "axios";

const baseURL=import.meta.env.VITE_BACKEND_URL;

const API = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
export const shortenUrl = async (originalUrl) => {
  const { data } = await API.post("/", { originalUrl });
  return data;
};

export const fetchShortUrl = async (shortUrl) => {
  const { data } = await API.get(`/${shortUrl}`);
  return data; 
};