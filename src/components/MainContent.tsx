import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  mainContainer: {
    flex: '1',
    padding: '56px 56px 0 56px',
  },
}));

export const MainContent: FC = () => {
  const classes = useStyle();
  return (<Box className={classes.mainContainer}>

  </Box>);
};

