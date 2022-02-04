import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/namespace
import { AuthorizationPage } from '../../pages/AuthorizationPage';

export const Authorization: FC = ({ children }) => {

  if (true) {
    return (
            <Switch>
                <Route path='/login' component={ AuthorizationPage } />
                <Redirect to='/login' />
            </Switch>
    );
  }
    
  return (
        <>
            { children }
        </>
  );
};
