'use strict';

function detail(server) {
  server.get('/detail', (req, res) => {
    res.status(200).end('Hello');
  });
}
