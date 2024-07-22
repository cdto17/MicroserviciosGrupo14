const express = require('express');
const db = require('./database/db');
const movieRouter = require('./releases-routes/movieRouter');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice  Running' });
});

app.use(cors({
  origin: 'http://lb-grupo14-app-cinema-2120355127.us-east-2.elb.amazonaws.com'
}));

// Importa el consumidor de Kafka
const kafkaConsumer = require('./kafka/consumer');

app.use(express.json());
app.use('/api', movieRouter); 

const PORT = process.env.PORT || 4018;
app.listen(PORT, () => {
  console.log(`Movie History Service is running on port ${PORT}`);
});

// Inicia el consumidor de Kafka
kafkaConsumer.start();