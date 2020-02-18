'use strict';

function route(app) {
  app.get('/main', (req, res) => {
    res.status(200).end('Hello Main!');
  });
}

module.exports = route;
