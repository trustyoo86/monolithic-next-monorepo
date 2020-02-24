'use strict';

const webpack = require('webpack');
const path = require('path');

const src = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    'app': path.join(src, 'client', 'App.tsx'),
    'server': path.join(src, 'server', 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
};