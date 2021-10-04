import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Campaigns from './Campaigns';
import Meeting from './Meeting';
import Buy from './Buy';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/campaigns"
          component={Campaigns}
        />
        <Route
          exact
          path="/buy"
          component={Buy}
        />
        <Route
          exact
          path="/m/:slug"
          component={Meeting}
        />
        <Route
          exact
          component={NotFound}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;