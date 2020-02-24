'use strict';

import App from '../client/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

function detail(server) {
  server.post('/detail', (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(App));
    res.status(200).send(html);
  });
}

module.exports = detail;
