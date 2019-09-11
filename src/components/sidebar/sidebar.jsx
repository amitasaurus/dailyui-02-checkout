import React, { Component } from "react";
import "./sidebar.scss";
import applePay from "../../images/apple-pay.png";
import paypal from "../../images/paypal.png";
import bhimUpi from "../../images/bhim-upi.png";
import Input from "../input/input";
import { MDCTextField } from "@material/textfield";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardnumber: "",
            cardtype: null
        };
        this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
        this.cardregex = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
            amex: /^3[47][0-9]{13}$/,
            dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        };
    }

    testCard(cardnumber) {
        if (this.cardregex.visa.test(cardnumber)) {
            return "visa";
        }
        if (this.cardregex.mastercard.test(cardnumber)) {
            return "mastercard";
        }
        if (this.cardregex.amex.test(cardnumber)) {
            return "amex";
        }
        if (this.cardregex.dinersclub.test(cardnumber)) {
            return "dinersclub";
        }
        if (this.cardregex.discover.test(cardnumber)) {
            return "discover";
        }
        if (this.cardregex.jcb.test(cardnumber)) {
            return "jcb";
        }
    }

    cc_format(value) {
        let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        let matches = v.match(/\d{4,16}/g);
        let match = (matches && matches[0]) || "";
        let parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(" ");
        } else {
            return value;
        }
    }

    componentDidMount() {
        let inputs = document.querySelectorAll(".mdc-text-field");
        for (let input of inputs) {
            new MDCTextField(input);
        }
    }
    handleCardNumberChange(event) {
        this.setState({
            cardnumber: this.cc_format(event.target.value)
        });

        let cardtype = this.testCard(event.target.value.split(" ").join(""));
        if (
            [
                "visa",
                "mastercard",
                "amex",
                "dinersclub",
                "discover",
                "jcb"
            ].includes(cardtype)
        ) {
            this.setState({ cardtype: cardtype });
        } else {
            this.setState({ cardtype: null });
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
                        <Input
                            label="Card Number"
                            type="text"
                            onChange={this.handleCardNumberChange}
                            value={this.state.cardnumber}
                        />
                        <div className="payment-modes__card--extraInfo">
                            <Input
                                label="Expiry"
                                type="text"
                                customclass="payment-modes__card--inputSmall"
                            />
                            <Input
                                label="CVV"
                                type="number"
                                customclass="payment-modes__card--inputSmall"
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
