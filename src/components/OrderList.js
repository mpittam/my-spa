// src/components/OrderList.js
import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/woocommerce';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    getOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
            
        <li key={order.id}>{order.id} - {order.total}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
