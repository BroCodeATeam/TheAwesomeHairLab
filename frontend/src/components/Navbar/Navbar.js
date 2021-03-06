import React from "react";
import { NavLink } from "react-router-dom";

import Logo from '../../images/logo.jpeg'

import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to="/"
                                     className="nav-links">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/team"
                                className="nav-links"
                            >
                                Our Team
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/services"
                                className="nav-links"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/look-book"
                                className="nav-links"
                            >
                                Look Book
                            </NavLink>
                        </li>
                        <NavLink to="/" className="nav-logo">
                            <img src={Logo} alt='The Awesome Hair Lab Logo' />
                        </NavLink>
                        <li className="nav-item">
                            <NavLink
                                to="/information"
                                className="nav-links"
                            >
                                Information
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact-us"
                                className="nav-links"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/reviews"
                                className="nav-links"
                            >
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;