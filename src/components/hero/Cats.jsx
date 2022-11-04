import { Component } from "react";
import "./Hero.css";

export default class Cats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Cats-wrapper">
                <div className="Cats-text">
                    <h1>
                        Cats available for adoption near you
                    </h1>
                </div>
                <div className="Cats-container">
                    <div className="cat-element"></div>
                    <div className="cat-element"></div>
                    <div className="cat-element"></div>
                    <div className="cat-element"></div>
                    <div className="cat-element"></div>
                </div>
            </div>
        )
    }
}