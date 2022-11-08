import { Component } from "react";
import HeroBase from "../components/common/HeroBase";

export default class RabbitsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeroBase  
                    name="Rabbits" 
                    bg="https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                />
            </div>
        )
    }
}