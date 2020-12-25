import React from "react";

import productsApi from "../../api/productsApi";
import ProductItem from "../ProductItem/ProductItem";

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
        //return <div>{this.state.products.map(product => <h1>{product.name}</h1>
        //)}</div>;
        return (
            <div>
                <table>
                    {this.state.products.map(product => (
                        <ProductItem 
                            key={product.id}
                            product={product}
                            deleteProduct={this.deleteProduct}
                        />
                    ))}

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