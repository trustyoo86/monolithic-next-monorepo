'use strict';

const main = require('@mnm/main');
const express = require('express');

const app = express();

main(app);

app.listen(8080, () => {
  console.log('app listen in 8080');
});