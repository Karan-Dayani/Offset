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
                    <img className="home-hero-img" src="/assets/images/hero1.png" alt="home-hero-img" />
                </div>
            </div>

            <div className="home-popular-div">
                <h1>Popular T-Shirts</h1>
            </div>

            <div className="home-men-div">
                <div className="home-men-left-div">
                    <img className="home-men-img-left" src="/assets/images/home-men.jpg" alt="home-men-img" />
                    <p>MEN</p>
                    <h2>The base collection - Ideal every day.</h2>
                    <Link>Shop Men</Link>
                </div>
                <img className="home-men-img-right" src="/assets/images/home-men.jpg" alt="home-men-img" />
            </div>

            <div>Hallo Everynian</div>

        </section>
    )
}