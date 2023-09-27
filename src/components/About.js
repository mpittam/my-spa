import React from 'react';

function About() {
  return (
<div class="container">
 
 <form action="https://localemv.com:8887" method="POST">
     <div class="col-md-6 col-md-offset-3">
             <h1>Sample Payment (Redirect)</h1>
<input type="hidden" name="xCommand" value="cc:sale" />
<label for="uname"><b>Amount</b></label>
<input type="text" name="xAmount" value="1.99" />




<label for="psw"><b>Invoice</b></label>
<input type="text" name="xInvoice" value="12345" /> 
<input type="hidden" name="xStreet" value="123 Main St" />
<input type="hidden" name="xZip" value="11111" />
   
<input type="hidden" name="xRedirectURL" value="https://localhost.3000/paymentrespone" />
<input type="submit" value="Initiate Payment" />

</div>
</form>
</div>
  );
}

export default About;