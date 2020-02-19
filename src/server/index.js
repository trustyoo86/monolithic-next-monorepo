'use strict';

const main = require('@mnm/main');
const express = require('express');
const next = require('next');
const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  main(server, app);
  
  server.listen(8080, () => {
    console.log('app listen in 8080');
  });
});


