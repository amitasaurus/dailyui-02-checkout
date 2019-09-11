import React, { Component } from "react";
import "./sidebar.scss";
import applePay from "../../images/apple-pay.png";
import paypal from "../../images/paypal.png";
import bhimUpi from "../../images/bhim-upi.png";
import Input from "../input/input";
import { MDCTextField } from "@material/textfield";

class Sidebar extends Component {
    state = {};
    componentDidMount() {
        let inputs = document.querySelectorAll(".mdc-text-field");
        for (let input of inputs) {
            new MDCTextField(input);
        }
    }
    render() {
        return (
            <div className="checkout__payment payment">
                <div className="checkout__heading">
                    Checkout Information
                    <i className="material-icons">shopping_cart</i>
                </div>
                <div className="checkout__payment-modes">
                    <div className="payment-modes__heading">Pay With</div>
                    <div className="payment-modes__mode">
                        <img
                            src="https://img.icons8.com/color/50/000000/mastercard-logo.png"
                            className="payment-modes--mastercard payment-modes--selected"
                            alt=""
                        />
                        <img
                            src={applePay}
                            className="payment-modes--applepay"
                            alt=""
                        />
                        <img
                            src={paypal}
                            className="payment-modes--paypal"
                            alt=""
                        />
                        <img
                            src={bhimUpi}
                            className="payment-modes--bhim"
                            alt=""
                        />
                    </div>
                    <div className="payment-modes__card">
                        <Input label="Name" type="text" />
                        <Input label="Card Number" type="number" />
                        <div className="payment-modes__card--extraInfo">
                            <Input
                                label="Expiry"
                                type="text"
                                customClass="payment-modes__card--inputSmall"
                            />
                            <Input
                                label="CVV"
                                type="number"
                                customClass="payment-modes__card--inputSmall"
                            />
                        </div>
                    </div>
                </div>
                <div className="checkout__buy">Buy</div>
            </div>
        );
    }
}

export default Sidebar;
