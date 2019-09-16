import React, { Component } from "react";
import "./input.scss";

class Input extends Component {
    state = {};
    getClass() {
        return `mdc-text-field mdc-text-field--outlined ${this.props.customclass}`;
    }
    getCardType() {
        return this.props.cardtype ? (
            <img
                src={this.props.cardlogos[this.props.cardtype]}
                alt={this.props.cardtype}
                className="card-type"
            />
        ) : (
            ""
        );
    }
    render() {
        return (
            <div className={this.getClass()}>
                <input
                    className="mdc-text-field__input"
                    id="text-field-hero-input"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    type={this.props.type}
                />
                <div className="mdc-notched-outline">
                    <div className="mdc-notched-outline__leading"></div>
                    <div className="mdc-notched-outline__notch">
                        <label
                            htmlFor="text-field-hero-input"
                            className="mdc-floating-label"
                        >
                            {this.props.label}
                        </label>
                    </div>
                    <div className="mdc-notched-outline__trailing">
                        {this.getCardType()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;
