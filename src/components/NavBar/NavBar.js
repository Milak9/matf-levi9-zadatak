import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-list-item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar-list-item">
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar