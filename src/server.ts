import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dbSetup from "./database/setup";

class Server {
  app = express();
  port: number;
  router: express.Router;

  constructor(port = 3000, router = express.Router()) {
    this.port = port;
    this.router = router;
  }

  async connectToDatabase() {
    const { host, name, user, password, port } = dbSetup;

    const connectionUrl = `mongodb://${host}:${port}/${name};`;

    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
      user: user,
      pass: password,
    });
  }

  setupMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  registerRoutes() {
    this.app.use(this.router);
  }

  async start() {
    try {
      await this.connectToDatabase();
      this.setupMiddlewares();
      this.registerRoutes();
      this.app.listen(this.port);
      console.log("[Server] Running on port:", this.port);
    } catch (err) {
      console.error("[Server] Failed to start.", err);
    }
  }
}

export default Server;
