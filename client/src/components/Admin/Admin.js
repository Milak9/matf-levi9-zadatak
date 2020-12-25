import React from "react"
import { Link } from "react-router-dom";

import "./Admin.css";

const Admin = () => (
    <div className="div">
        <ul>
            <li>
                <Link to="/admin/proizvodi" className="link">List of products</Link>
            </li>
            <li>
                <Link to="/admin/unos-novog-proizvoda" className="link">Add new product</Link>
            </li>
        </ul>
    </div>
);

export default Admin;