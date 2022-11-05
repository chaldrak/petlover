import { Component } from "react";
import "./Footer.css";
import Cat from "../../assets/cat.ico";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Footer-wrapper">
                <div className="Footer-text" style={{display: "flex", alignItems: "center"}}>
                    <p>made with 💞 by Chaldrak</p>
                </div>
                <div className="Footer-icon">
                    <img src={Cat} alt="cat icon" />
                </div>
                <div className="Footer-sns" style={{display: "flex", alignItems: "center"}}>
                    <ul>
                        <li>
                            <a href="">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/chaldrak-dokpa-a9b59621a/">
                                <BsLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}