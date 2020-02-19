'use strict';

const next = require('next');
const app = next({ dev: true });

function route(server, root) {
  app.prepare().then(() => {
    server.get('/main', (req, res) => {
      app.render(req, res, '/main', req.query);
    });
  });
}

module.exports = route;
