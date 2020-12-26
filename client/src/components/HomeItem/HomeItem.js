import React from "react";
import { Link } from "react-router-dom"

import "./HomeItem.css";

const HomeItem = props => (
    <Link to={`/${props.product.id}`} className="link_item">
        <div className="home_item">
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
        </div>
    </Link>
);

export default HomeItem;