import React from "react";
import { Link } from "react-router-dom"

import "./HomeItem.css";

const HomeItem = props => (
    <div className="home_item">
        <p>{props.product.name}</p>
        <p>{props.product.description}</p>
        <p>{props.product.price}</p>
        <Link to="/">Link</Link>
    </div>
);

export default HomeItem;