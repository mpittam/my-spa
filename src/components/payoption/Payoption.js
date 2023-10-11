import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import creditcard from "../../assets/creditcard.png"
import paypal from "../../assets/paypal.png"
import './Payoption.css';

function Payoption({ orderId, orderAmount }) {


    const [paymode, setPaymode] = useState()
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setPaymode(e.target.name)
    }

    const clickHandler = (e) => {
        if (paymode === "creditcard") {
            navigate('/payment', { state: { orderId, orderAmount } })
        }
    }

    return (
        <div className="pay-option">
            <div className="pay-label">Choose payment method:</div>
            <div className="pay-container">
                <img
                    className={paymode === "creditcard" ? "pay-img img-select" : "pay-img"}
                    name="creditcard"
                    src={creditcard}
                    alt="credit-card"
                    onClick={changeHandler}
                    value={paymode}
                />
                <img
                    className={paymode === "paypal" ? "pay-img img-select" : "pay-img"}
                    src={paypal}
                    name="paypal"
                    alt="paypal"
                    onClick={changeHandler}
                    value={paymode}
                />
                <input
                    type="button"
                    value={paymode ? paymode === "creditcard" ? `Pay by ${paymode}` : `Pay by ${paymode} {disabled}` : `Choose pay method`}
                    className={paymode ? "pay-btn active" : "pay-btn inactive"}
                    onClick={clickHandler}
                />
            </div>
        </div>
    );
}

export default Payoption;
