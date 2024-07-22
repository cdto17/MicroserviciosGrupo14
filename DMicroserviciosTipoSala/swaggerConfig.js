const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Theater Listing Service',
      version: '1.0.0',
      description: 'API para listar tipo sala',
    },
    servers: [
      {
        url: 'http://localhost:4024',
      },
    ],
  },
  apis: ['./routes/theaterRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
