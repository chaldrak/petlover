import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default class Loader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Loader-wrapper">
                <p>
                    Petlover
                </p>
            </div>
        )
    }
}