import React from "react";

import "./CreateNewProduct.css";
import productsApi from "../../api/productsApi";

class CreateNewProduct extends React.Component {
    
    state = {
        name: "",
        description: "",
        price: 0
    };

    render() {
        return (
            <div className="new-product">
                <h2> Add new product</h2>
                <form onSubmit={this.onFormSubmit} className="form">
                    <div className="field">
                        <label>Name:</label>
                        <input
                            name="name"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Name of the product"
                        />
                    </div>
                    <div className="field">
                        <label>Description:</label>
                        <textarea
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description}
                            placeholder="Description of the product"
                        />
                    </div>
                    <div className="field">
                        <label>Price:</label>
                        <input
                            name="price"
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.price}
                            placeholder="Price of the product"
                        />
                    </div>
                    <button className="ui button" type="submit">
                        Create
                    </button>
                </form>
            </div>
        );
    }

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        const { name, description, price } = this.state;

        productsApi.createProduct({ name, description, price})
            .then(() => {
                this.props.history.push("/");
            })
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default CreateNewProduct;