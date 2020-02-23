'use strict';

const App = require('../client/App');

function detail(server) {
  server.post('/detail', (req, res) => {
    res.status(200).send(App);
  });
}

module.exports = detail;
