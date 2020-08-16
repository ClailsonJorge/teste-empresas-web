import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Description from '../pages/Description';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={SignIn} />
    <Route path='/home' component={Home} isPrivate />
    <Route path='/description/:name/:id' component={Description} isPrivate />
  </Switch>
);

export default Routes;
