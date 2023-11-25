import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [menuClass, setMenuClass] = React.useState("mob-header-menu")

    function handleNavMenu() {
        setMenuClass(prevClass => prevClass === "mob-header-menu" ? "mob-header-menu active-menu" : "mob-header-menu")
    }

    return (
        <header>
            <div className="pc-header">
                <ul className="header-start-links">
                    <li><NavLink to="/collection">Collection</NavLink></li>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men">Men</NavLink></li>
                </ul>
                <Link to="/" className="site-logo">Offset</Link>
                <ul className="header-end-links">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li>
                        <NavLink to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="mob-header">
                <Link to="/" className="site-logo">Offset</Link>
                <div className="header-end">
                    <NavLink to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                        </svg>
                    </NavLink>
                    <svg onClick={handleNavMenu} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div>
            <div className={menuClass}>
                <ul>
                    <li><NavLink to="/collection">Collection</NavLink></li>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men">Men</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </header>
    )
}