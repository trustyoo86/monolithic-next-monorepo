'use strict';

const env = process.env.NODE_ENV || 'development';
const merge = require('webpack-merge');
const base = require('./tools/base');

function bundler(opts = {}) {
  if (!Object.keys(opts).length) { return false; }
  return merge(base, Object.assign({}, opts, { mode: env }));
}

module.exports = bundler;
