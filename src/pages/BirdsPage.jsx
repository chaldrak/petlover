import { Component } from "react";
import HeroBase from "../components/common/HeroBase";

export default class BirdsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeroBase  
                    name="Birds" 
                    bg="https://media.istockphoto.com/id/1331329468/photo/bird-yellow-finch-feeding-on-wildflowers-hamilton-county-ind.jpg?b=1&s=170667a&w=0&k=20&c=Lr0YAOT_WemuUxXOYNwePhkF6DQd0AFzdBpK939id78=" 
                />
            </div>
        )
    }
}