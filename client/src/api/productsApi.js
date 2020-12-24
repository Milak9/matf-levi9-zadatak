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

    getProducts() {
        return this.httpClient
            .get("/admin/proizvodi")
            .then(response =>
                response.data.map(item => this._mapResponseToProduct(item)));
    }

    getProduct(id) {
        return this.httpClient
            .get(`/admin/proizvodi/${id}`)
            .then(reponse => this._mapResponseToProduct(reponse.data));
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

    _mapResponseToProduct(reponse) {
        return {
            id: reponse._id,
            name: reponse.name,
            description: reponse.description,
            price: reponse.price
        };
    }
}

export default new ProductsApi();