import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import creditcard from "../../assets/credit-card.png"
import ebt from "../../assets/ebt.jpeg"
import cash from "../../assets/cash.jpg"
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
                    className={paymode === "ebt" ? "pay-img2 img-select" : "pay-img2"}
                    src={ebt}
                    name="ebt"
                    alt="ebt"
                    onClick={changeHandler}
                    value={paymode}
                />
                <img
                    className={paymode === "cash" ? "pay-img img-select" : "pay-img"}
                    src={cash}
                    name="cash"
                    alt="cash"
                    onClick={changeHandler}
                    value={paymode}
                />
                <input
                    type="button"
                    value={paymode ? paymode === "creditcard" ? `Pay by ${paymode}` : `Pay by ${paymode} {disabled}` : `Choose pay method`}
                    className={paymode ? (paymode === "creditcard" ? "pay-btn active" : "pay-btn deactive") : "pay-btn inactive"}
                    onClick={clickHandler}
                />
            </div>
        </div>
    );
}

export default Payoption;
