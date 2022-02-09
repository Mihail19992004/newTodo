import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import { boardNav } from '../BoardNavigation';

const useClasses = makeStyles((theme) => ({
  container: {
    background: 'rgba(161,187,243,0.18)',
    width: '100%',
    height: theme.spacing(90),
  },
}));

export const BoardNavContainer = () => {
    
  const classes = useClasses();
    
  return (
        <Box className={ classes.container }>
            <Switch>
                {
                    boardNav.map(({ component, link, name }) => (
                        <Route key={ name } path={`/boards/${link}`} component={ component } />
                    ))
                }
                <Redirect to='/boards/tasks' />
            </Switch>
        </Box>
  );
};