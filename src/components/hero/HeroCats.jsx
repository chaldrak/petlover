import { Component } from "react";
import TypewriterComponent from "typewriter-effect";

export default class HeroHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HeroCats-wrapper">
                <p>
                    <TypewriterComponent
                        className="Home-text"
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('Cats')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Cats')
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                        }}
                        options={{loop: true}}
                    />
                </p>
            </div>
        )
    }
}