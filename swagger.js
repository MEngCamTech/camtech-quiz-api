// swagger.js
const swaggerUrl = process.env.SWAGGER_URL
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CamTech Quiz API',
      version: '1.0.0',
      description: 'Mid-term Assignment Project',
    },
    servers: [
      {
        url:  swaggerUrl , // change based on your env
      },
    ],
  },
  apis: ['./routes/*.js'], // path to your API routes or controllers
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;