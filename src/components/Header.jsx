import React from "react";
import logo from "../assets/Logo.png"

const Header = () => {
    return(
        <nav>
            <img className="logo" src={logo} alt="logo"/>
            <h2>Kelvin.eth</h2>
        </nav>
    )
}

export default Header