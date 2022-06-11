import React from "react"
const lightLogo = require("../../assets/shared/desktop/logo-light.png");
const hamButton = require("./icon-hamburger.svg").default;
const facebook = require("../../assets/shared/desktop/icon-facebook.svg").default;
const instagram = require("../../assets/shared/desktop/icon-instagram.svg").default;
const pinterest= require("../../assets/shared/desktop/icon-pinterest.svg").default;
const twitter= require("../../assets/shared/desktop/icon-twitter.svg").default;
const youtube= require("../../assets/shared/desktop/icon-youtube.svg").default;


const Footer = () => {

    return (<footer>
        <nav id="footer__nav" className="navigation">
            <div id="logo__box">
                <img src={lightLogo} alt="Logo" id="logo" />
            </div>
            <div id="nav__list">
                <a href="#" className="item">Our Company</a>
                <a href="#" className="item">Locations</a>
                <a href="#" className="item">Contact</a>
            </div>
            <p className="contact">
             Designo Central Office<br />
              3886 Wellington Street<br />
             Toronto, Ontario M9C 3J5<br />
             
            </p>
            <p className="contact">
            Contact Us (Central Office)<br />
                  P : +1 253-863-8967<br />
                 M : contact@designo.co<br/>
            
            </p>
            <div className="social__logo">
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
            </div>
        </nav>
    </footer>)
}
export default Footer;