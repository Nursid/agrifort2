import axios from "axios";


const API = "http://localhost:5000/api/products";
export const IMG_API = "http://localhost:5000";

export const getProducts = () => axios.get(API);
export const addProduct = (data) => axios.post(API, data);
export const updateProduct = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteProductAPI = (id) => axios.delete(`${API}/${id}`);
