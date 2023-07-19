import axios from "./axios";

export const createCart = (input) => axios.post("/cart/addcart", input)
export const getCart = (id) => axios.get(`/cart/getcart/${id}`)
export const deleteCart = (id) => axios.delete(`/cart/deletecart/${id}`)