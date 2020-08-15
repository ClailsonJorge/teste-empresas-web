import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Description from './pages/Description';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/home' component={Home} />
        <Route path='/description/:name/:id' component={Description} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
