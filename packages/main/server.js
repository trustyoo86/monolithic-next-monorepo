'use strict';

const next = require('next');

function route(server, app) {
  server.get('/main', (req, res) => {
    app.render(req, res, '/main', req.query);
  });
}

module.exports = route;
