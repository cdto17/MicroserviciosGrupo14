const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Offers Listing Service',
      version: '1.0.0',
      description: 'API para listar ofertas',
    },
    servers: [
      {
        url: 'http://localhost:4023',
      },
    ],
  },
  apis: ['./routes/offersRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
