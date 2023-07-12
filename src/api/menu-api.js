import axios from "./axios";

export const createMenu = (input) => axios.post("/menu", input)
export const getMenu = () => axios.get("/menu/menus")
export const getAllAdd = () => axios.get("/menu/getalladd")
export const editMenu = (input) => axios.put(`/menu/${input.id}`, input)
export const deleteMenu = (id) => axios.delete(`/menu/${id}`, id)


