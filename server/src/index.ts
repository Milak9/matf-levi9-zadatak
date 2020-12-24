import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { ProductsController } from "./controllers/ProductsController";
import { createConnection } from "typeorm";

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
    }

     public async start() {
        const connection = await createConnection();
        ProductsController.registerRoutes(this.app, connection);

         this.app.listen(8080, () => {
             console.log("App listening on port http://localhost:8080");
         });
     }
}

const app = new App();
app.start();