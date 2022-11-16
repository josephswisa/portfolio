import React, {Component} from "react";
import "./nav.css"
import {NavLink} from "react-router-dom";

class Navbar extends Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'/page1'}>About</NavLink>
                <NavLink to={"/page2"}>Contact</NavLink>
            </div>
        )
    }

}
export default Navbar;