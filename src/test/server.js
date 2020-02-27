'use strict';

const axios = require('axios').default;
const express = require('express');

const server = express();
const url = 'http://localhost:4000';

server.get('/detail', (req, res) => {
  axios.post(`${url}/detail`)
    .then((response) => {
      console.log('res ===>', response.data);
      res.status(200).send(response.data);
    });
});

server.listen(8080, () => {
  console.log('test server listen 8080');
});