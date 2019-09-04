

const express = require('express');
const productsRouter = require('../products/products-router.js')
const suppliersRouter = require('../suppliers/suppliers-router.js')

server = express();

server.use(express.json()); // teaches express to parse JSON body
server.use('/products', productsRouter);
server.use('/suppliers', uppercaser, suppliersRouter)

// sanity check endpoint
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up...' });
});

server.get('/suppliers', (req, res) => {
  res.send('got your get to suppliers')
})

server.get('/suppliers/:name', (req, res) => {
  res.send('got your get to suppliers')
})

server.get('/clients', (req, res) => {})

module.exports = server; // CommonJS modules (node)

// const express = require('express');

// const productsRouter = require('../products/products-router');
// const suppliersRouter = require('../suppliers/suppliers-router');

// const server = express();

// // global middleware
// server.use(express.json());

// // using custom middleware globally:
// // server.use(uppercaser);

// // using middleware locally
// server.use('/products', productsRouter);

// // using custom middleware locally
// server.use('/suppliers', uppercaser, suppliersRouter);

// // route handlers
// server.get('/', (req, res) => {
//     res.send(`<h1>Test</h1>`);
// });

// // export default server
// module.exports = server;