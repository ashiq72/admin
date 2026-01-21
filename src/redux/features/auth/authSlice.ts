import axios from "axios";

// interface User {
//   _id: string;
//   name: string;
//   phone: string;
//   role?: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem("accessToken"),
//   loading: false,
//   error: null,
// };

const API = axios.create({
  baseURL: "https://base360.onrender.com/api/v1",
});

// attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
