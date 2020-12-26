import axios from "axios";
import * as qs from "qs";

class ProductsApi {
    config = {
        baseURL: "http://localhost",
        port: 8080
    };

    constructor() {
        this.httpClient = axios.create({
            baseURL: `${this.config.baseURL}:${this.config.port}`
        });
    }

    getItems() {
        return this.httpClient
            .get("/")
            .then(response =>
                response.data.map(item => this._mapResponseToProduct(item)));
    }

    getProducts() {
        return this.httpClient
            .get("/admin/proizvodi")
            .then(response =>
                response.data.map(item => this._mapResponseToProduct(item)));
    }

    getProduct(id) {
        return this.httpClient
            .get(`/admin/proizvodi/${id}`)
            .then(response => this._mapResponseToProduct(response.data));
    }

    createProduct(product) {
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        return this.httpClient
            .post('/admin/unos-novog-proizvoda', qs.stringify(product), config)
            .then(response => this._mapResponseToProduct(response.data));
    }

    deleteProduct(id) {
        return this.httpClient.delete(`/admin/proizvodi/${id}`);
    }

    _mapResponseToProduct(response) {
        return {
            id: response.id,
            name: response.name,
            description: response.description,
            price: response.price
        };
    }
}

export default new ProductsApi();