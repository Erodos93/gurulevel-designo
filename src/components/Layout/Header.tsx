import React from "react"
const darkLogo = require("../../assets/shared/desktop/logo-dark.png") as string;
const hamButton:string = require("./icon-hamburger.svg").default;

const Header = ()=>{

    return (<header id="navigation">
        <img src={darkLogo} alt="Logo" id="logo" />
        <img src={hamButton} alt="Menu Button" id="button__hamburger" />
    </header>)
}
export default Header;