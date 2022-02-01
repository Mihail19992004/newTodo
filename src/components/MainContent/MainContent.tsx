import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { AppRouter } from '../AppRouter/AppRouter';
import { useClasses } from './MainContent.style';

export const MainContent: FC = () => {

  const classes = useClasses();

  return (
    <Box className={classes.mainContainer}>
      <AppRouter />
    </Box>
  );
};
