import dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/../../.env.${process.env.NODE_ENV}`,
});

export default ({
  host: process.env.UGRADE_DB_HOST || "localhost",
  port: process.env.UGRADE_DB_PORT || "27017",
  user: process.env.UGRADE_DB_USER || "root",
  password: process.env.UGRADE_DB_PWD || "root",
  name: process.env.UGRADE_DB_NAME || "ugrade",
});