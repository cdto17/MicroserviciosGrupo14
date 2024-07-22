const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Cinemas Listing Service',
      version: '1.0.0',
      description: 'API para listar ofertas',
    },
    servers: [
      {
        url: 'http://localhost:4020',
      },
    ],
  },
  apis: ['./routes/cinemasRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
