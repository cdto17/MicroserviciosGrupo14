const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Payments Listing Service',
      version: '1.0.0',
      description: 'API para listar pagos',
    },
    servers: [
      {
        url: 'http://localhost:4021',
      },
    ],
  },
  apis: ['./routes/paymentRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
