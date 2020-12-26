import React from "react";

import "./CreateNewProduct.css";
import productsApi from "../../api/productsApi";

class CreateNewProduct extends React.Component {
    
    state = {
        name: "",
        description: "",
        price: 0,
        mistake: false
    };

    render() {
        return this.state.mistake ? this.renderMistake() : this.renderForm();

    }

    renderForm = () => (
        <div className="new-product">
            <h2> Add new product</h2>
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Name of the product"
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="Description of the product"
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        name="price"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.price}
                        placeholder="Price of the product"
                    />
                </div>
                <button className="btn_create" type="submit">
                    Create
                </button>
            </form>
        </div> 
    );

    renderMistake = () => 
        <div>
            Error, you can't leave empty name or set negative or 0 value for the price of the product. 
        </div>

    onFormSubmit = event => {
        event.preventDefault();

        let { name, description, price, mistake } = this.state;

        if (name === "" || price <= 0) {
            this.setState({
                mistake: true
            });
            return;
        }

        console.log(this.state);

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