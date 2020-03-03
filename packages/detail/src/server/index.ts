import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App';

function detail(server) {
  server.post('/detail', (req, res) => {
    const data = { test: 'Hello' };
    const html = ReactDOMServer.renderToString(React.createElement(App, data));
    res.status(200).render('index', {
      initialData: JSON.stringify(data),
      content: html,
    });
  });
}

export default detail;
