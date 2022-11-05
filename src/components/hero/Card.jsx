import { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Cat-element" style={{overflow: "hidden"}}>
                <div style={{display: "flex", width: "100%", height: "70%"}}>
                    <img style={{height: "100%",}} src="https://cdn2.thecatapi.com/images/rRLX_RH_o.jpg" alt="" />
                </div>
                <div class="Cat-info">
                    <h4><b>John Doe</b></h4> 
                    <p>Width: 1920</p> 
                    <p>Height: 1080</p> 
                </div>
            </div>
        )
    }
}