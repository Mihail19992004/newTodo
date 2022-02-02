import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { boardsRoutes } from '../router'

export const AppRouter = () => {

  return (
    <Switch>
      { boardsRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      )) }
    </Switch>
  )
}
