const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const Movie = require('../releases-models/movie');

function start() {
  console.log('Starting Kafka Consumer setup...');

  const consumer = new Consumer(
    client,
    [{ topic: 'newReleaseCreated' }],
    {
      autoCommit: true,
      groupId: 'movie-consumer-group'
    }
  );

  consumer.on('message', async (message) => {
    console.log('Kafka message received:', message);

    try {
      let movieData;
      movieData = JSON.parse(message.value);

      await Movie.processAndCreateMovie(movieData);
      console.log('Movie created successfully');
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });

  consumer.on('error', (error) => {
    console.error('Error in Kafka Consumer:', error);
  });

  consumer.on('ready', () => {
    console.log('Kafka Consumer is connected and ready.');
  });
}

module.exports = { start };
