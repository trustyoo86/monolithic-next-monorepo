'use strict';

require('@babel/register');
const detail = require('@mnm/detail').default;
const express = require('express');

const server = express();

console.log('detail ===>', detail);
detail(server);

server.listen(4000, () => {
  console.log('app listen in 3000');
});


