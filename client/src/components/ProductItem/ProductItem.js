import React from "react";

import "./ProductItem.css"

const ProductItem = props => (
    <tr className="row">
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
            <button className="btn_delete"
                onClick={() => props.deleteProduct(props.product.id)}>
                    Delete
            </button>
        </td>

    </tr>
);

export default ProductItem;