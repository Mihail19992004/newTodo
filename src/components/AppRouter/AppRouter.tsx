import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { boardsRoutes } from '../../router';

export const AppRouter = () => {

  return (
    <Switch>
      { boardsRoutes.map((route) => (
        <Route path={ route.path } exact={ route.exact } component={ route.component } key={ route.path } />
      )) }
      <Redirect to='/boards' />
    </Switch>
  );
};
