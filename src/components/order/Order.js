// src/components/OrderDetails.js
import React, { useState } from 'react';
import { fetchOrderDetails } from '../../api/woocommerce';

import './Order.css'; // Import a CSS file for styling
// import OrderDetails from '../orderdetails/OrderDetails';
import SingleOrder from '../singleorder/SingleOrder';

function Order() {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchOrder = async (e) => {
        // e.preventDefault();
        try {
            // Ensure the order ID is not empty
            if (!orderId) {
                setError('Please enter an order ID.');
                return;
            }

            const orderData = await fetchOrderDetails(orderId);
            setOrder(orderData);
            setError(null); // Clear any previous error
            // setOrderId(''); // Clear the order ID text box
        } catch (error) {
            setError('Error fetching order details. Please check the order ID.');
            console.error('Error fetching order details:', error);
            setOrder(null); // Clear any previous order details
        }
    };



    return (
        <div className="center-container">
            {/* <h2>Fetch Order Details</h2>
            <label>Order ID: </label> */}
            <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className='order-input'
                placeholder='Enter order id'
            />
            <button
                onClick={handleFetchOrder}
                className='order-btn'
            >Fetch Order</button>

            {/* Display any error message */}
            {error && <p className="error">{error}</p>}
            {/* <OrderDetails order={order} /> */}
            {order && <SingleOrder order={order} />}
        </div>
    );
}

export default Order;
