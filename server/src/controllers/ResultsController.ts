import express from "express"
import { Connection } from "typeorm";
import {Results} from "../entities/Results";

export class ResultsController {
    connection: Connection;

    constructor(conn: Connection) {
        this.connection = conn;
    }

    static registerRoutes(app: express.Application, conn: Connection) {
        app.get("/results", (request, response) => {
            new ResultsController(conn).getResults(request, response);
        });

        app.get("/results/:id", (request, response) => {
            new ResultsController(conn).getResult(request.params.id, response);
        });

        app.post("/results", (request, response) => {
            new ResultsController(conn).store(request, response);
        });

        // app.put("/results/:id", (request, response) => {
        //     new ResultsController(conn).updateOne(request, response);
        // });

        // app.delete("/results/:id", (request, response) => {
        //     new ResultsController(conn).deleteOne(request, response);
        // });
    }

    // Fja cuva u bazi
    async store(req: express.Request, res: express.Response) {
        const result = new Results();
        result.firstName = req.body.firstName;
        result.lastName = req.body.lastName;
        result.score = req.body.score;

        await this.connection.mongoManager.save(result);
        
        res.status(201).send("snimljeno!");
    }    

    async getResults(request: express.Request, response: express.Response) {
        const results = await this.connection.mongoManager.find(Results);
        response.send(results)
    }

    async getResult(id: string, response: express.Response) {
        const result = await this.connection.mongoManager.findOne(Results, id);
        response.send(result)
    }
}

// Kada neko ode na rutu POST:/results - vracam string/objekat