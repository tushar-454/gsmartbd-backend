let connectionURI = process.env.DB_CONNECTION_URI;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
connectionURI = connectionURI.replace('<username>', db_username);
connectionURI = connectionURI.replace('<db_password>', db_password);
const environment = process.env.NODE_ENV || 'dev';

const radis_host = process.env.REDIS_HOST;
const radis_port = process.env.REDIS_PORT;
const radis_password = process.env.REDIS_PASSWORD;

module.exports = {
  mongodb: {
    dev: 'mongodb://localhost:27017/gsmartbd',
    prod: connectionURI,
    environment,
  },
  cors: {
    dev: 'http://localhost:5173',
    prod: process.env.FRONTEND_BASEURL,
    environment,
  },
  redis: {
    dev: {
      host: 'localhost',
      port: 6379,
      password: '',
    },
    prod: {
      host: radis_host,
      port: radis_port,
      password: radis_password,
    },
    environment,
  },
};
