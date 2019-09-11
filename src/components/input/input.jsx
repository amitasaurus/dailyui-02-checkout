import React, { Component } from "react";
import "./input.scss";

class Input extends Component {
    state = {};
    getClass() {
        return `mdc-text-field mdc-text-field--outlined ${this.props.customclass}`;
    }
    render() {
        return (
            <div className={this.getClass()}>
                <input
                    className="mdc-text-field__input"
                    id="text-field-hero-input"
                    {...this.props}
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
                    <div className="mdc-notched-outline__trailing"></div>
                </div>
            </div>
        );
    }
}

export default Input;
