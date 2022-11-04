import { Component } from "react";
import HeroHome from "../components/hero/HeroHome";
import Pets from "../components/hero/Pets";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeroHome />
                <Pets />
            </div>
        )
    }
}