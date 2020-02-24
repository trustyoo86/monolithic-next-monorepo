'use strict';

require('@babel/register');
const detail = require('@mnm/detail');
const express = require('express');

const server = express();

detail(server);

server.listen(3000, () => {
  console.log('app listen in 3000');
});


