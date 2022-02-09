import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { theme } from '../../theme';

const useClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  elements: {
    width: '70%',
    height: '100%',
  },
  filters: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '30%',
    background: 'rgba(102,102,102,0.16)',
    height: '100%',
  },
  title: {
    padding: theme.spacing(2),
  },
}));

export const BoardFilters = () => {
    
  const { t } = useTranslation();
  const classes = useClasses();
    
  return (
        <Box className={ classes.container }>
            <Box className={ classes.elements }>
                
            </Box>
            <Box className={ classes.filters }>
                <Typography className={ classes.title } variant='h6'>
                    { t('Filters') }
                </Typography>
            </Box>
        </Box>
  );
};