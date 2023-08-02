import axios from "./axios";

export const createOrder = (input) => axios.post("/order/createorder", input);
export const getAllOrder = () => axios.get("/order/getallorder");
export const getOrder = (id) => axios.get(`order/getorder/${id}`);
export const getInfoOrder = (id) => axios.get(`order/getinfoorder/${id}`);
export const updatestatusorder = (id) =>
  axios.put(`order/updatestatusorder/${id}`);
