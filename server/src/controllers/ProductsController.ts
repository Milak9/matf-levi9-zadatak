import express from "express"
import { Connection } from "typeorm";
import {Product} from "../entities/Product";

export class ProductsController {
    connection: Connection;

    constructor(conn: Connection) {
        this.connection = conn;
    }

    static registerRoutes(app: express.Application, conn: Connection) {
        app.get("/admin/proizvodi", (request, response) => {
            new ProductsController(conn).getResults(request, response);
        });

        app.get("/admin/proizvodi/:id", (request, response) => {
            new ProductsController(conn).getResult(request.params.id, response);
        });

        app.post("/admin/unos-novog-proizvoda", (request, response) => {
            new ProductsController(conn).store(request, response);
        });

        app.delete("/admin/proizvodi/:id", (request, response) => {
            new ProductsController(conn).deleteOne(request.params.id, response);
        });

        app.get("/", (request, response) => {
            new ProductsController(conn).getResults(request, response);
        });

        app.get("/:id", (request, response) => {
            new ProductsController(conn).getResult(request.params.id, response);
        });
    }

    // Fja cuva u bazi
    async store(req: express.Request, res: express.Response) {
        const result = new Product();
        result.name = req.body.name;
        result.description = req.body.description;
        result.price = req.body.price;

        await this.connection.mongoManager.save(result);
        
        res.status(201).send("Saved!");
    }    

    async getResults(request: express.Request, response: express.Response) {
        const results = await this.connection.mongoManager.find(Product);
        response.send(results)
    }

    async getResult(id: string, response: express.Response) {
        const result = await this.connection.mongoManager.findOne(Product, id);
        response.send(result)
    }

    async deleteOne(id: string, response: express.Response) {
        const result = await this.connection.mongoManager.delete(Product, id);
        response.send(result);
    }
}