import React from "react";

import productsApi from "../../api/productsApi";
import ProductItem from "../ProductItem/ProductItem";

import "./ProductsTable.css"

class ProductsTable extends React.Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        return this.state.products ? this.renderTable() : this.renderLoader();
    }

    renderTable = () => {
        return (
            <div>
                <h2>List of all products in the database:</h2>
                <table className="table">
                    <thead className="theader">
                        <tr>
                            <th>Name of the product</th>
                            <th>Description of the product</th>
                            <th>Price of the product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product => (
                            <ProductItem 
                                key={product.id}
                                product={product}
                                deleteProduct={this.deleteProduct}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    renderLoader = () => <div>No entries yet...</div>;

    fetchProducts() {
        productsApi.getProducts()
            .then(products => this.setState({ products }));
    }

    deleteProduct = id => {
        productsApi.deleteProduct(id).then(() => this.fetchProducts());
    };
}

export default ProductsTable;