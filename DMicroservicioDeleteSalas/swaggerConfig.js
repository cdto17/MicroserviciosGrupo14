const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movies API',
      version: '1.0.0',
      description: 'API RESTful para gestionar información de la sala de cine'
    },
    servers: [
      {
        url: 'http://localhost:4015/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] // Archivos con anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
