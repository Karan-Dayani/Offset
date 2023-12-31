import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="home-section">

            <div className="home-hero-div">
                <div className="home-hero-left-div">
                    <h1>Slick.Modern.<br></br>Awesome.</h1>
                    <Link to="/collection"><span>Shop Collection</span></Link>
                </div>
                <div className="home-hero-right-div">
                    <img className="home-hero-img" src="/assets/images/hero1.png" alt="home-hero-img" />
                </div>
            </div>

            <div className="home-popular-div">
                <h1 style={{textAlign: "center"}}>Popular T-Shirts</h1>
            </div>

            <div className="home-men-div">
                <div className="home-men-left-div">
                    <img className="home-men-img-left" src="/assets/images/home-men.jpg" alt="home-men-img" />
                    <p>MEN</p>
                    <h2>The base collection - Ideal every day.</h2>
                    <Link><span>Shop Men</span></Link>
                </div>
                <img className="home-men-img-right" src="/assets/images/home-men.jpg" alt="home-men-img" />
            </div>

            <div className="home-collection-div">
                <p>NEW COLLECTION</p>
                <h3>Be different in your own way!</h3>
                <h4>Find your unique style.</h4>
                <Link><span>Shop Collection</span></Link>
            </div>

            <div className="home-women-div">
                <img className="home-women-img-right" src="/assets/images/home-women.jpg" alt="home-men-img" />
                <div className="home-women-left-div">
                    <img className="home-women-img-left" src="/assets/images/home-women.jpg" alt="home-men-img" />
                    <p>WOMEN</p>
                    <h2>The base collection - Ideal every day.</h2>
                    <Link><span>Shop Women</span></Link>
                </div>
            </div>

            <div>Hallo Everynian</div>

        </section>
    )
}