import React from "react";
import { Link } from "react-router-dom";

const ProductItem = props => (
    <tr>
        <td>
            {props.product.name}
        </td>
        <td>
            {props.product.description}
        </td>
        <td>
            {props.product.price}
        </td>
        <td>
            <button
                onClick={() => props.deleteProduct(props.product.id)}>
                    Delete
            </button>
        </td>
    </tr>
);

export default ProductItem;