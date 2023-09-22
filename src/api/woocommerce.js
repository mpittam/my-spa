// src/api/woocommerce.js
import axios from 'axios';

const WooCommerceAPI = axios.create({
  baseURL: 'https://woo-supernaturally-quality-balloon.wpcomstaging.com/wp-json/wc/v3', // Replace with your store's URL
  auth: {
    username: 'ck_1237eba2b6f07d2bc4c0f2d96045f780be32cfba',
    password: 'cs_5834b0deea99f0d92a031209e56bb067af5aedfa',
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