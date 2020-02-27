'use strict';

const webpack = require('webpack');
const path = require('path');

const src = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    'detail-app': path.join(src, 'client', 'App.tsx'),
    'detail-server': path.join(src, 'server', 'index.ts'),
  },
  output: {
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};