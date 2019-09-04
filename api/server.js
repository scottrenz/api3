

const express = require('express');

server = express();

server.use(express.json()); // teaches express to parse JSON body


// sanity check endpoint
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up...' });
});

server.get('/suppliers', (req, res) => {
  res.send('got your get to suppliers')
})

server.get('/clients', (req, res) => {})

module.exports = server; // CommonJS modules (node)
