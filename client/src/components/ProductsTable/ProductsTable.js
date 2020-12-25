import React from "react";

import productsApi from "../../api/productsApi";

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
        return <div>{this.state.products.map(product => <h1>{product.name}</h1>
        )}</div>;
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