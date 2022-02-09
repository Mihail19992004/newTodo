import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { useClasses } from './LoadingTranslation.style';

export const LoaderTranslation = () => {
    
  const classes = useClasses();
    
  return (
        <Box className={ classes.container }>
            <CircularProgress />
        </Box>
  );
};