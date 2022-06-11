import React from "react";
import { Main } from "../Layout/Main";

const introImg = require("../../assets/home/desktop/image-hero-phone.png")
const arrow = require("../../assets/shared/desktop/icon-right-arrow.svg")
const friendly = require("../../assets/home/desktop/illustration-friendly.svg").default
const passionate = require("../../assets/home/desktop/illustration-passionate.svg").default
const resourceful = require("../../assets/home/desktop/illustration-resourceful.svg").default

export const Home = () => {

    return (
        <Main idProp="home__main">
            <>
                <section id="intro__section">
                    <article id="intro__article" className="article">

                        <header><h1>Award-winning custom designs and digital branding solutions</h1></header>
                        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
                            and engaging brand experiences. Find out more about our services.</p>
                        <button className="button">Learn more</button>
                    </article>
                    <div id="intro__img--box">

                        <img id="intro--img" src={introImg} alt="" />
                    </div>
        
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
                                    View Projects
                                    <img src={arrow.default} alt="" />
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
                <section id="description__section">
                    <article className="description__article">
                            <div className="image-backgroung">
                                <img src={passionate} alt="Passionate Image" />

                            </div>
                        <header>
                            <h3>Passionate </h3>
                        </header>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                            art, design, and technology into exciting new solutions.</p>
                    </article>
                    <article className="description__article">
                            <div className="image-backgroung">
                                <img src={resourceful} alt="Resourceful Image" />

                            </div>
                        <header>
                            <h3>Resourceful </h3>
                        </header>
                        <p>Everything that we do has a strategic purpose.We use an agile approach in all of our projects and value customer
                            collaboration.It guarantees superior results that fulfill our clients’ needs.</p>
                    </article>
                    <article className="description__article">
                            <div className="image-backgroung">
                                <img src={friendly} alt="Friendly Image" />

                            </div>
                        <header>
                            <h3> Friendly</h3>
                        </header>
                        <p>We are a group of enthusiastic folks who know how to put people first.Our success depends on our customers, and we
                            strive to give them the best experience a company can provide.</p>
                    </article>

                </section>
                <section id="contact__section">
               
                    <article id="contact__card">
                        <header>
                            <h2>Let’s talk about your project</h2>
                        </header>
                        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    </article>
                   

                </section>
            </>

        </Main>)
}



