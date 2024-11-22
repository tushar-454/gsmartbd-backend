const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');
const swaggerDoc = YAML.load('./swagger.yaml');
const { cors } = require('../config');
const cors_module = require('cors');
const cookieParser = require('cookie-parser');
const globalError = require('../utils/globalError');
const routes = require('../routes');

const applyMiddleware = (app) => {
  app.use(
    cors_module({
      origin: cors[cors.environment],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  // app.use(
  //   OpenApiValidator.middleware({
  //     apiSpec: './swagger.yaml',
  //     validateRequests: true,
  //     validateResponses: true,
  //   })
  // );
  app.use(routes);
  app.use(globalError);
};

module.exports = applyMiddleware;
