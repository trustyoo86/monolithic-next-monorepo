import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App';

function detail(server) {
  server.post('/detail', (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(App));
    res.status(200).render('pages/default', {
      content: html,
    });
  });
}

export default detail;
