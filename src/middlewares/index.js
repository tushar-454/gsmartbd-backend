const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
// const OpenApiValidator = require('express-openapi-validator');
const swaggerDoc = YAML.load('./swagger.yaml');
// const globalError = require('../utils/GlobalError');
// const routes = require('../routes');

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  // app.use(
  //   OpenApiValidator.middleware({
  //     apiSpec: './swagger.yaml',
  //     validateRequests: true,
  //     validateResponses: true,
  //   })
  // );
  // app.use(routes);
  // app.use(globalError);
};

module.exports = applyMiddleware;
