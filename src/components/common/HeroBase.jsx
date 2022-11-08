import { Component } from "react";
import TypewriterComponent from "typewriter-effect";

export default class HeroBase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { bg, name } = this.props;
        return (
            <div 
                className="HeroCats-wrapper"
                style={{backgroundImage: `url(${bg})`}}
            >
                <p>
                    <TypewriterComponent
                        className="Home-text"
                        onInit={(typewriter) => {
                            typewriter
                            .typeString(`${name}`)
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('In development...')
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