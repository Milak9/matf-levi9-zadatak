import React from "react"
import { withRouter } from "react-router-dom";
import HomeItem from "../HomeItem/HomeItem";

import productsApi from "../../api/productsApi";

class Product extends React.Component {
    state = {
        product: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        productsApi.getHomeItem(id)
            .then(product => this.setState({ product }));
    }

    render() {
        return (
            <div>
                <HomeItem
                    product={this.state.product}
                />
            </div>
        )
    }
}

export default withRouter(Product);