import React from "react";
import applePay from "./images/apple-pay.png";
import paypal from "./images/paypal.png";
import bhimUpi from "./images/bhim-upi.png";
import "./App.css";

function App() {
    return (
        <div className="checkout">
            <div className="checkout__payment payment">
                <div className="checkout__heading">
                    Checkout Information
                    <i class="material-icons">shopping_cart</i>
                </div>
                <div className="checkout__payment-modes">
                    <div className="payment-modes__heading">Pay With</div>
                    <div className="payment-modes__mode">
                        <img
                            src="https://img.icons8.com/color/50/000000/mastercard-logo.png"
                            className="payment-mode--mastercard payment-mode--selected"
                        />
                        <img
                            src={applePay}
                            className="payment-mode--applepay"
                        />
                        <img src={paypal} className="payment-mode--paypal" />
                        <img src={bhimUpi} className="payment-mode--bhim" />
                    </div>
                </div>
                <div className="checkout__buy">Buy</div>
            </div>
            <div className="checkout__details"></div>
        </div>
    );
}

export default App;
