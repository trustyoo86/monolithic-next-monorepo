import React from 'react';
import ReactDOM from 'react-dom';

import App from '../shared/App';

declare const document: any;

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);
