import { Component } from "react";
import Card from "./Card";
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="Cat-element" style={{overflow: "hidden"}}>
                        <div style={{display: "flex", width: "100%", height: "70%"}}>
                            <img style={{height: "100%"}} src="https://cdn2.thecatapi.com/images/r_njVlaSz.jpg" alt="" />
                        </div>
                        <div class="Cat-info" style={{padding: "0", margin: "0"}}>
                            <h4><b>John Doe</b></h4> 
                            <p>Width: 1920</p> 
                            <p>Height: 1080</p> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}