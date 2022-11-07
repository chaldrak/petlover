import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: "",
        }
    }

    componentDidMount() {
        this.getPic();
    }

    getPic = () => {
        const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.cat?.id}`;
        axios
        .get(URL)
        .then((response) => {
            this.setState({
                pic: response.data[0]?.url
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        const cat = this.props.cat;
        const id = cat?.id;
        const name = cat?.name;
        const origin = cat?.origin;
        const image = this.state.pic;
        return (
            <div className="Cat-element">
                <div
                    className="Cat-image"
                    style={{backgroundImage: `url(${image})`}}
                >
                </div>
                <div className="Cat-info">
                    <h4><b>{ name }</b></h4>
                    <p>id: { id }</p> 
                    <p>Origin: { origin.substring(0, 15) }</p> 
                    <NavLink to={"/cats/" + id} className="Cat-button" >Read more</NavLink>
                </div>
            </div>
        )
    }
}