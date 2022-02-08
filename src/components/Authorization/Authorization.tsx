import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/AuthorizationPage';
import authStore from '../../stores/Authorization/Authorization';
import { observer } from 'mobx-react';

export const Authorization: FC = observer(({ children }) => {

  const { isAuth } = authStore;
    
  if (!isAuth) {
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
});
