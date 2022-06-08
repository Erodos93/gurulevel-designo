import React from "react";
import { Main } from "../Layout/Main";
// const view1 = require("../../assets/home/mobile/image-web-design.jpg")
// const view2 = require("../../assets/home/mobile/image-web-design.jpg")
// const view3 = require("../../assets/home/mobile/image-web-design.jpg")
const introImg = require("../../assets/home/desktop/image-hero-phone.png")
const arrow = require("../../assets/shared/desktop/icon-right-arrow.svg")

export const Home = () => {

    return (
        <Main idProp="home__main">
            <>
                <section id="intro__section">
                    <article id="intro__article">

                        <header><h1>Award-winning custom designs and digital branding solutions</h1></header>
                        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
                            and engaging brand experiences. Find out more about our services.</p>
                        <button className="button">Learn more</button>
                    </article>
                    <div id="intro__img--box">

                        <img id="intro--img" src={introImg} alt="" />
                    </div>
                    {/* <div id="intro__img--box">
                    <div>

                    </div>
                    <img id="intro--img" src={introImg} alt="" />
                </div> */}
                </section>
                <section id="view__section">

                    <article id="intro__view--links-box">
                        <div className="view--link" id="view--1">
                            <div className="text">
                                <span>Web Design</span>
                                <a href="#" className="link">
                                    <div>View Projects</div>
                                    <img src={arrow.default} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="view--link" id="view--2">
                            <div className="text">
                                <span>App Design</span>
                                <a href="#" className="link">
                                    <div>View Projects</div>
                                    <img src={arrow.default} alt="" />
                                </a>

                            </div>
                        </div>
                        <div className="view--link" id="view--3">
                            <div className="text">
                                <span>Graphic Design</span>
                                <a href="#" className="link">
                                    <div>View Projects</div>
                                    <img src={arrow.default} alt="" />
                                </a>
                            </div>

                        </div>



                    </article>
                </section>
                <section id="description__section">
                <article>

                    
                </article>

                </section>
            </>

        </Main>
    )
}


