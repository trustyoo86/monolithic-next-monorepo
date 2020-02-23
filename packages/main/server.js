'use strict';

function route(server, app) {
  server.get('/main', (req, res) => {
    app.render(req, res, '/main', req.query);
  });
}

module.exports = route;
