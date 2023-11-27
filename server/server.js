


const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connect');
const cors = require('cors');

const app = express();
const users = require('./routes/users');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', users);

// Self-ping function to ping the server every 10 minutes
const pingInterval = 10 * 60 * 1000; // 10 minutes in milliseconds

const pingServer = () => {
  console.log('Pinging server...');
  const https = require('https');
  const options = {
    hostname: 'https://subhianime.onrender.com',
    // hostname: 'http://127.0.0.1/',
    port: 5000,
    path: '/',
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('Server is alive!');
    } else {
      console.error('Server is not responding!');
    }
  });

  req.on('error', (error) => {
    console.error('Error pinging server:', error);
  });

  req.end();
};

// Start the ping interval
setInterval(pingServer, pingInterval);

const start = async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log('Server is up on port 5000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
