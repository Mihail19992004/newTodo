import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useClasses } from './IconBox.style';
import { IconBoxProps } from '../../features';
import { Box } from '@material-ui/core';

export const IconBox: FC<IconBoxProps> = ({ children, type, active }): ReactElement => {

  const classes = useClasses();

  if (active) {

    return (
        <Box className={ `${classes.activeLink} ${classes.activeLinkType}` } >
          { children }
        </Box>
    );
  }

  return (
    <Link className={ `${classes.navLink} ${ active ? classes.active : null }` } to={ `/${type}` }>
      { children }
    </Link>
  );
};
