import React from 'react';
import ReactDOM from 'react-dom';

import App from '../shared/App';

declare const document: any;
declare const window: any;

const props = window.__INITIAL_STATE__;

ReactDOM.hydrate(
  <App {...props} />,
  document.getElementById('root')
);
