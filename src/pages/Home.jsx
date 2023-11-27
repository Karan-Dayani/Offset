import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="home-section">
            <div className="home-hero-div">
                <div className="home-hero-left-div">
                    <h1>Slick.Modern.<br></br>Awesome.</h1>
                    <Link to="/collection">Shop Collection</Link>
                </div>
                <div className="home-hero-right-div">
                    <img className="home-hero-img" src="/assets/images/hero1.png" alt="" />
                </div>
            </div>
            <div>Hallo Everynian</div>
        </section>
    )
}