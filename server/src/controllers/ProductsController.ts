import express from "express"
import { Connection } from "typeorm";
import {Product} from "../entities/Product";

export class ProductsController {
    connection: Connection;

    constructor(conn: Connection) {
        this.connection = conn;
    }

    static registerRoutes(app: express.Application, conn: Connection) {
        app.get("/results", (request, response) => {
            new ProductsController(conn).getResults(request, response);
        });

        app.get("/results/:id", (request, response) => {
            new ProductsController(conn).getResult(request.params.id, response);
        });

        app.post("/results", (request, response) => {
            new ProductsController(conn).store(request, response);
        });

        // app.put("/results/:id", (request, response) => {
        //     new ProductsController(conn).updateOne(request, response);
        // });

        // app.delete("/results/:id", (request, response) => {
        //     new ProductsController(conn).deleteOne(request, response);
        // });
    }

    // Fja cuva u bazi
    async store(req: express.Request, res: express.Response) {
        const result = new Product();
        result.name = req.body.name;
        result.description = req.body.description;

        await this.connection.mongoManager.save(result);
        
        res.status(201).send("snimljeno!");
    }    

    async getResults(request: express.Request, response: express.Response) {
        const results = await this.connection.mongoManager.find(Product);
        response.send(results)
    }

    async getResult(id: string, response: express.Response) {
        const result = await this.connection.mongoManager.findOne(Product, id);
        response.send(result)
    }
}

// Kada neko ode na rutu POST:/results - vracam string/objekat