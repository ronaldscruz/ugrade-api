import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dbSetup from './database/setup';

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

    const connectionUrl = `mongodb://${user}:${password}@${host}:${port}/${name}`;

    await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  }

  setupMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"))
  }

  registerRoutes() {
    this.app.use(this.router);
  }

  async start() {
    try {
      await this.connectToDatabase();
      this.setupMiddlewares();
      this.registerRoutes();
      console.log("[Server] Running on port:", this.port)
    } catch(err) {
      console.error("[Server] Failed to start.", err)
    }
  }
}

export default Server;