'use strict';

const bundler = require('@mnm/bundler');
const path = require('path');

const clientBundler = bundler({
  entry: {
    'detail-app': path.resolve(__dirname, 'src', 'client', 'App.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
  },
});

const serverBundler = bundler({
  entry: {
    'detail-server': path.resolve(__dirname, 'src', 'server', 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
});

module.exports = [clientBundler, serverBundler];
