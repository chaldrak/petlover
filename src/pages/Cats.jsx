import { Component } from "react";
import HeroCats from "../components/hero/HeroCats";

export default class Cats extends Component {
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