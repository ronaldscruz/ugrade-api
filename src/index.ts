import dotenv from "dotenv";
import Server from "./server";
import routes from "./routes";

dotenv.config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`,
});

const svPort = Number(process.env.UGRADE_SV_PORT || 3000);

const ugradeServer = new Server(svPort, routes);

ugradeServer.start();
