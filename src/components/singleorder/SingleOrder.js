import React from 'react'
import './SingleOrder.css'; // Import a CSS file for styling
function SingleOrder({ order }) {


    const paymentsPage = () => {
        console.log('Payments manager')
    }


    return (
        <table className="single-table">
            <tr>
                <th>ORDER ID</th>
                <td>{order.id}</td>
            </tr>
            <tr>
                <th>FULL NAME</th>
                <td>{`${order && order.billing && order.billing.first_name} ${order && order.billing && order.billing.last_name}`}</td>
            </tr>
            <tr>
                <th>ITEMS ORDERED</th>
                <td>
                    <table className='item-table'>
                        {order && order.line_items && order.line_items.map((item) => (
                            <tr key={item.id}>
                                <th>{item.name}</th>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </table>

                </td>
            </tr>
            <tr>
                <th>LAST MODIFIED DATE</th>
                <td>{order.date_modified}</td>
            </tr>
            <tr>
                <th>TOTAL AMOUNT</th>
                <td>{`${order.total} ${order.currency}`}</td>
            </tr>
            <tr>
                <th>PAYMENT STATUS</th>
                {/* <td className={order.status == 'completed' ? 'success' : 'warning'}>
                    {order.status}
                </td> */}
                {order.status === 'completed' ?
                    (<td className='success'>{order.status}</td>) :
                    (<td onClick={paymentsPage} className='warning'>{`${order.status}`} - <span className='payLabel'>Click to pay</span></td>)}
            </tr>
        </table>
    )
}


export default SingleOrder;