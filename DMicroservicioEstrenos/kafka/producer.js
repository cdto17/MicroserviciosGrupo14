const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is connected and ready.');
});

producer.on('error', (error) => {
  console.error('Error in Kafka Producer', error);
});

exports.send = (movie) => {
  console.log('Sending movie to Kafka:', movie);
  const payloads = [{
    topic: 'newReleaseCreated',
    messages: JSON.stringify(movie)
  }];

  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Failed to send Kafka message', err);
    } else {
      console.log('Kafka message sent', data);
    }
  });
};