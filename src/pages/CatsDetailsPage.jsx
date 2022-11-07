import { Component } from "react";
import CatsDetails from "../components/details/CatsDetails";

export default class CatsDetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CatsDetails />
            </div>
        )
    }
}