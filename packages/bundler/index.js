'use strict';

const env = process.env.NODE_ENV || 'development';
const merge = require('webpack-merge');
const base = require('./tools/base');

function bundler(opts = {}) {
  if (!Object.keys(opts).length) { return false; }
  const webpackConfig = merge(base, Object.assign({}, opts, { mode: env, watch: env === 'development' }));
  console.log('webpack config', webpackConfig);
  return webpackConfig;
}

module.exports = bundler;
