import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Payment() {

  const location = useLocation();
  const { orderId, orderAmount } = location.state;

  useEffect(() => {
    //console.log(data)
  })

  return (
    <div className="container">

      <form action="https://localemv.com:8887" method="POST">
        <div>
          <h1>Sample Payment (Redirect)</h1>
          
          <input type="hidden" name="xCommand" value="cc:sale" />
          <label htmlFor="uname"><b>Amount</b></label>
          <input type="text" name="xAmount" value={orderAmount} />

          <label htmlFor="psw"><b>Invoice</b></label>
          <input type="text" name="xInvoice" value={orderId} />
          <input type="hidden" name="xStreet" value="123 Main St" />
          <input type="hidden" name="xZip" value="11111" />

          <input type="hidden" name="xRedirectURL" value="https://www.cardknox.com/bbpos/response.htm" />
          <input type="submit" value="Initiate Payment" />

        </div>
      </form>
    </div>
  );
}

export default Payment;