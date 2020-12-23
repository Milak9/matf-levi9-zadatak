import React from "react"
import { Link } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-list-item">
                <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-list-item">
                <Link to="/admin" className="navbar-link">Admin</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar