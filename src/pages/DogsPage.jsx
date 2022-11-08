import { Component } from "react";
import HeroBase from "../components/common/HeroBase";

export default class DogsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeroBase name="Dogs" bg="https://cdn.pixabay.com/photo/2022/10/02/13/42/siberian-husky-7493521_960_720.jpg" />
            </div>
        )
    }
}