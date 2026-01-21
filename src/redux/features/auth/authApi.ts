import API from "./authSlice";

export interface LoginPayload {
  phone: string;
  password: string;
}

export const loginApi = async (data: LoginPayload) => {
  const res = await API.post("/users/login", data);
  return res.data; // { accessToken }
};

export const getMeApi = async () => {
  const res = await API.get("/users/me");
  return res.data; // user object
};
