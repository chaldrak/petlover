import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const menu = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Cats",
        path: "/cats"
    },
    {
        name: "Dogs",
        path: "/dogs"
    },
    {
        name: "Rabbits",
        path: "/rabbits"
    },
    {
        name: "Birds",
        path: "/birds"
    }
];

const HeaderMenuLink = ({item: {name, path}}) => {
    return (
        <li className="Header-menu-li">
            <NavLink to={ path } className="Header-menu-link">{ name }</NavLink>
        </li>
    )
}

const HeaderMenu = ({ menu }) => {
    const menuList = menu.map((item) => {
        return <HeaderMenuLink key={item.name} item={item} />
    });
    return (
        <ul className="Header-menu">
            { menuList }
        </ul>
    )
}

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="Header-wrapper">
                <div className="Header-container">
                    <HeaderMenu menu={menu} />
                </div>
            </nav>
        )
    }
}

export default Header;