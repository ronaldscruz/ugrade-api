import Server from './server';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

const svPort = Number(process.env.UGRADE_SV_PORT || 3000)

const ugradeServer = new Server(svPort, routes);

ugradeServer.start()