import axios from "axios";
import { Component } from "react";
import "./CatsDetails.css";
import DetailsContent from "./DetailsContent";
import Sidebar from "./Sidebar";

const URL = "https://api.thecatapi.com/v1/breeds";
export default class CatsDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getCats();
    }

    getCats = async () => {
        await axios
        .get(URL)
        .then((response) => {
            this.setState({
                data: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
        })
    }

    render() {
        return (
            <div className="Cats-Details-wrapper">
                <Sidebar data={this.state.data} />
                <DetailsContent data={this.state.data} />
            </div>
        )
    }
}