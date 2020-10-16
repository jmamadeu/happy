import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} key='Landing' />
        <Route path='/app' component={OrphanageMap} key='Orphanage' />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
