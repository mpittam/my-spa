import React from 'react'
import './OrderDetails.css'; // Import a CSS file for styling

function OrderDetails({order}) {

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
        <>
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
        </>
    )

}

export default OrderDetails;