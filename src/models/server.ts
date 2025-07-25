import cors from "cors";
import express, { Application } from "express";
import db from "../db/connection";
import { MessageRouter } from "../routes/messages";
import { corsOptions } from "../config/corsOptions";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    messages: "/messages",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // DataBase Connection
    this.dbConnection();

    // Middlewares
    this.app.use(cors());
    this.app.options("*", cors());
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));

    // Protected Routes And Controllers
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  routes() {
    this.app.use(this.apiPaths.messages, MessageRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Backend server is running on port ${this.port}`);
    });
  }

  getApp() {
    return this.app;
  }
}

export default Server;
