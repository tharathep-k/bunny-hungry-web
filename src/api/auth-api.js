import axios from "./axios";

export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input)
// export const fetchMe = () => axios.get("/auth/me") 
export const fetchMe = () => axios.get("/auth/me/user")
export const fetchMeStaff = () => axios.get("/auth/me/staff")