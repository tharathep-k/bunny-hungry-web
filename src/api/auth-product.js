import axios from "./axios";

export const createMenu = (input) => axios.post("/menu", input)
export const editMenu = (input) => axios.put(`/menu/${input.id}`, input)
export const getMenu = () => axios.get("menu/menus")
export const deleteMenu = (id) => axios.delete(`/menu/${id}`, id)


