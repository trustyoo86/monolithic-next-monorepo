'use strict';

const bundler = require('@mnm/bundler');
const path = require('path');

const clientBundler = bundler({
  entry: {
    'detail-app': path.resolve(__dirname, 'src', 'client', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
});

const serverBundler = bundler({
  entry: {
    'detail-server': path.resolve(__dirname, 'src', 'server', 'index.ts'),
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
  },
});

module.exports = [clientBundler];
