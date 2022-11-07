import { Component } from "react";
import "./CatsDetails.css";
import DetailsContent from "./DetailsContent";
import Sidebar from "./Sidebar";

export default class CatsDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Cats-Details-wrapper">
                <Sidebar />
                <DetailsContent />
            </div>
        )
    }
}