import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = (props) => {
    const cat = props.cat;

    const [pic, setPic] = useState("");
    const [test, setTest] = useState(false);

    const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${cat.id}`;
    
    useEffect(() => {
        axios
        .get(URL)
        .then((response) => {
            const data = response.data[0]
            setPic(data?.url)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [test]);

    return (
        <NavLink to={ "/cats/" + cat.id } className="Cats-link" >
            <div className="Cats-link-group">
                <div className="Cats-image-content">
                    <img 
                        className="Cats-image" 
                        src={pic} 
                        alt={cat.name} 
                    />
                </div>
                <span className="Cats-name">{ cat.name }</span>
            </div>
        </NavLink>
    )
}
export default class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data;
        const RenderItems = data.map((cat) => <SidebarItem key={cat.id} cat={cat} />)
        return (
            <div className="Cats-sidebar">
                <h3>List of Cats</h3>
                <div className="Cats-menu">
                    {RenderItems}
                </div>
            </div>
        )
    }
}