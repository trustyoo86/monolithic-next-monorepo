'use strict';

const mode = process.env.NODE_ENV || 'development';

module.exports = require(`./tools/${mode}.js`);
