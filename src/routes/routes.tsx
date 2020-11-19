import React from 'react';
import Landing from '../pages/Landing';

import { BrowserRouter, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
    </BrowserRouter>
  )
}

export default Routes;