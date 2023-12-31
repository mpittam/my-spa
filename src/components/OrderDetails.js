// src/components/OrderDetails.js
import React, { useState } from 'react';
import { fetchOrderDetails } from '../api/woocommerce';

import './OrderDetails.css'; // Import a CSS file for styling

function OrderDetails() {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchOrder = async () => {
        try {
            // Ensure the order ID is not empty
            if (!orderId) {
                setError('Please enter an order ID.');
                return;
            }

            const orderData = await fetchOrderDetails(orderId);
            setOrder(orderData);
            setError(null); // Clear any previous error
            setOrderId(''); // Clear the order ID text box
        } catch (error) {
            setError('Error fetching order details. Please check the order ID.');
            console.error('Error fetching order details:', error);
            setOrder(null); // Clear any previous order details
        }
    };

// Helper function to render nested objects
const renderNestedObject = (object) => {
    if (object == null) {
      return ''; // Return an empty string if the object is null or undefined
    }
  
    return (
      <table className="nested-table">
        <tbody>
          {Object.entries(object).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {typeof value === 'object'
                  ? renderNestedObject(value)
                  : value != null
                  ? value
                  : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
    return (
        <div className="center-container">
            <h2>Fetch Order Details</h2>
            <label>Order ID: </label>
            <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <button onClick={handleFetchOrder}>Fetch Order</button>

            {/* Display any error message */}
            {error && <p className="error">{error}</p>}

            {order && (
                <div>
                    <h3>Order Details</h3>
                    <div className="center-table"> 
                    <table className="order-table">
                        <tbody>
                            {Object.entries(order).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>
                                        {typeof value === 'object'
                                            ? renderNestedObject(value)
                                            : value != null
                                                ? value
                                                : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            )}
        </div>
    );
}

export default OrderDetails;
