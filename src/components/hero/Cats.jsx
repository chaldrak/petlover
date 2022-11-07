import { Component } from "react";
import Card from "./Card";
import "./Hero.css";
import getCats from "../../composables/cats";
import axios from "axios";

const URL = "https://api.thecatapi.com/v1/breeds";

export default class Cats extends Component {
    constructor(props) {
        super(props);
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
            console.log(this.state.data)
        })
    }

    render() {
        const cats = this.state.data;
        const CatRender = () => {
            return cats.map((cat) => {
                <Card cat={cat} />
            })
        };
        return (
            <div className="Cats-wrapper">
                <div className="Cats-text">
                    <h1>
                        Cats available for adoption near you
                    </h1>
                </div>
                <div className="Cats-container">
                    { 
                        cats.map((cat) => <Card key={cat?.id} cat={cat} />)  
                    }
                </div>
            </div>
        )
    }
}