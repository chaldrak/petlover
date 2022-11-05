import { Component } from "react";
import Cats from "../components/hero/Cats";
import HeroCats from "../components/hero/HeroCats";

export default class CatsPages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeroCats />
                <Cats />
            </div>
        )
    }
}