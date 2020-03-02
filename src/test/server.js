'use strict';

const axios = require('axios').default;
const express = require('express');
const path = require('path');

const server = express();
const url = 'http://localhost:4000';

const distPath = path.resolve(__dirname, '..', '..', 'dist');

server.use('/dist', express.static(distPath));

server.get('/detail', (req, res) => {
  axios.post(`${url}/detail`)
    .then((response) => {
      res.status(200).send(response.data);
    });
});

server.listen(8080, () => {
  console.log('test server listen 8080');
});