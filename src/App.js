import React, { Component } from "react";
import "./App.scss";
import applePay from "./images/apple-pay.png";
import paypal from "./images/paypal.png";
import bhimUpi from "./images/bhim-upi.png";
import { MDCTextField } from "@material/textfield";

class App extends Component {
    state = {};
    componentDidMount() {
        new MDCTextField(document.querySelector(".mdc-text-field"));
    }
    render() {
        return (
            <div className="checkout">
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
                            <div className="mdc-text-field mdc-text-field--outlined">
                                <input
                                    className="mdc-text-field__input"
                                    id="text-field-hero-input"
                                />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label
                                            htmlFor="text-field-hero-input"
                                            className="mdc-floating-label"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__buy">Buy</div>
                </div>
                <div className="checkout__details"></div>
            </div>
        );
    }
}

export default App;
