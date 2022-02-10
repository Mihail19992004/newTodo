import React, { FC, ReactElement } from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { useClasses } from './Header.style';

interface HeaderProps {
  optionalComponent?: ReactElement,
  title: string
}

export const Header: FC<HeaderProps> = ({ title, optionalComponent }) => {

  const classes = useClasses();

  return (
    <Box className={ classes.container }>
      <Box>
        <Typography variant='h4' className={ classes.namePage } >
            { title }
        </Typography>
      </Box>
      <Box className={ classes.flexInput }>
            { optionalComponent }
      </Box>
    </Box>
  );
};

