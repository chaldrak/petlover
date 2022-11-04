import { Component } from "react";
import "./Hero.css";

export default class Pets extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pets-wrapper">
                <div className="Pets-text">
                    <h1>
                        Hire A Pet
                    </h1>
                    <p>
                        Love pets? Check out available positions in our stores during the holidays.
                    </p>
                </div>
                <div className="Pets-container">
                    <div className="Pet-element"></div>
                    <div className="Pet-element"></div>
                    <div className="Pet-element"></div>
                    <div className="Pet-element"></div>
                    <div className="Pet-element"></div>
                </div>
            </div>
        )
    }
}