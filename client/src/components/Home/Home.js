import React from "react"
import { Link } from "react-router-dom"

import productsApi from "../../api/productsApi";
import HomeItem from "../HomeItem/HomeItem";

import "./Home.css"

class Home extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        return this.state.products ? this.renderTable() : this.renderLoader();
    }

    renderTable = () => {
        return (
            <div className="home_div">
                {this.state.products.map(product => (
                    <HomeItem 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        );
    }

    renderLoader = () => <div>No products yet...</div>;

    fetchProducts() {
        productsApi.getItems()
            .then(products => this.setState({ products }));
    }
}

export default Home;