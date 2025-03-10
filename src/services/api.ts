import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log("Error feacting products", error)
    throw error
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.log("Error featching data reviews", error)
    throw error
  }
}