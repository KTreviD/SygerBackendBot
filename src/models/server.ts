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
    this.app.use(cors(corsOptions));
    this.app.options("*", cors(corsOptions));
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));

    // Security headers middleware
    this.app.use((req, res, next) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Content-Security-Policy", "default-src 'self'");
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("X-Frame-Options", "DENY");
      res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
      res.setHeader("X-Permitted-Cross-Domain-Policies", "none");
      next();
    });

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
