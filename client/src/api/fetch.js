import axios from "axios";

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

const fetch = axios.create({
  baseURL: process.env.VUE_APP_API_URL  || "http://localhost:4040",
  withCredentials: true,
});

fetch.interceptors.request.use(
  async (config) => {
    const accessKey =
      process.env.PUBLIC_ACCESS_COOKIE_KEY || "dream_access";
    if (!accessKey) {
      throw new Error("ACCESS_COOKIE_KEY is not defined");
    }
    const accessToken = getCookie(accessKey);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default fetch;
