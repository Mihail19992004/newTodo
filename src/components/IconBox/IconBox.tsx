import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useClasses } from './IconBox.style';
import { IconBoxProps } from '../../features';

export const IconBox: FC<IconBoxProps> = ({ children, type, active }): ReactElement => {

  const classes = useClasses();

  return (
    <Link className={`${classes.navLink} ${ active ? classes.active : null}`} to={ type }>
      { children }
    </Link>
  );
};
