const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const offersRoutes = require('./routes/paymentRoutes');  
const cors = require('cors');

const app = express();
const port = 4021;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Login Running' });
});

app.use(cors({
  origin: 'http://lb-grupo14-app-cinema-2120355127.us-east-2.elb.amazonaws.com'
}));
app.use(bodyParser.json());
app.use('/api', offersRoutes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice list payments listening at http://localhost:${port}`);
  console.log(`http://localhost:4021/api-docs`);
});
