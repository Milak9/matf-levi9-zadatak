import React from "react"

import "./CreateNewProduct.css"

class CreateNewProduct extends React.Component {
    
    state = {
        name: "",
        description: ""
    }

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
                    <button className="ui button" type="submit">
                        Create
                    </button>
                </form>
            </div>
        )
    }

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}

export default CreateNewProduct