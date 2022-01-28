import React, { FC, ReactElement, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';

const useClasses = makeStyles(() => ({
  sbContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    '& svg': {
      fill: 'grey',
      cursor: 'pointer',
      padding: '15px 25px',
      '&:hover, &:focus': {
        fill: 'black',
      },
    },
  },
  active: {
    fill: 'black !important',
    borderLeft: '1px solid black',
  },
  linksSideBar: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface IconBoxProps {
  type: string,
  children: ReactElement
}

export const IconBox: FC<IconBoxProps> = ({ children, type }): ReactElement => {

  const { pathname } = useLocation();
  const classes = useClasses();
  const activeTab = useMemo((): string => pathname.split('/')[1], [pathname]);

  return (
        <Box className={`${type === activeTab ? classes.active : null}`}>
            {children}
        </Box>
  );
};
