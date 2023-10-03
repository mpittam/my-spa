// src/api/woocommerce.js
import axios from 'axios';
import {CONSUMER_KEY,CONSUMER_SECRET, STORE_URL} from '../config/woocommerce/secret'

const WooCommerceAPI = axios.create({
  baseURL: STORE_URL, // Replace with your store's URL
  auth: {
    username: CONSUMER_KEY,
    password: CONSUMER_SECRET,
  },
});


export const fetchOrders = async () => {
  try {
    const response = await WooCommerceAPI.get('/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOrderDetails = async (orderId) => {
    try {
      const response = await WooCommerceAPI.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };