const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cinemasRoutes = require('./routes/snacksRoutes');  
const cors = require('cors');

const app = express();
const port = 4019;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});

app.use(cors({
  origin: 'http://lb-grupo14-app-cinema-2120355127.us-east-2.elb.amazonaws.com'
}));
app.use(bodyParser.json());
app.use('/api', cinemasRoutes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice list snacks listening at http://localhost:${port}`);
  console.log(`http://localhost:4019/api-docs`);
});
