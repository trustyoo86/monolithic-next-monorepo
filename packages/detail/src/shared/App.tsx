'use strict';

import React, { useEffect } from 'react';

interface IProps {
  test: string;
}

const App = (props: IProps) => {
  const { test } = props;

  useEffect(() => {
  }, []);

  return (
    <div>{test} world!</div>
  );
};

export default App;
