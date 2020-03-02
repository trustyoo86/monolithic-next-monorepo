'use strict';

import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    alert('Test!');
  }, []);

  return (
    <div>Hello world!</div>
  );
};

export default App;
