import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react';

const useClasses = makeStyles(() => ({
  container: {
    background: '#b1fae8',
    width: '100%',
    height: '100vh',
  },
}));

export const AuthorizationPage = observer(() => {
    
  const classes = useClasses();
  // const {} =
  return (
        <Box className={classes.container}>
            {/*<Button onClick={() }>*/}
            {/*    off*/}
            {/*</Button>*/}
        </Box>
  );
});