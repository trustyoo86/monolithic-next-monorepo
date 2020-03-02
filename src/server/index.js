'use strict';

require('@babel/register');
const detail = require('@mnm/detail').default;
const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');

const server = express();

const distPath = path.resolve(__dirname, '..', '..', 'dist');
const templateDir = path.resolve(__dirname, '..', 'templates');
const LAYOUT_DIR = path.resolve(templateDir, 'layouts');

const handlebars = expressHandlebars.create({
  defaultLayout: 'index',
  layoutsDir: LAYOUT_DIR,
  extname: 'hbs',
});

server.engine('hbs', handlebars.engine);
server.set('view engine', 'hbs');
server.set('views', templateDir);
server.use('/dist', express.static(distPath));

detail(server);

server.listen(4000, () => {
  console.log('app listen in 3000');
});


