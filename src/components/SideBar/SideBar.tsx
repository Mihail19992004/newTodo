import React, { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
// @ts-ignore
import { ReactComponent as ReactLogo } from '../../assets/react-js.svg';
import { IconBox } from '../IconBox';
import { useClasses } from './SideBar.style';
import { mainNavigation, social } from './SideBar.routes';

export const SideBar: FC = () => {

  const classes = useClasses();
  const { pathname } = useLocation();
  const activeTab = useMemo((): string => pathname.split('/')[1], [pathname]);

  return (
    <Box className={ classes.container }>
      <Box className={ classes.sideBarContent }>
        <Box className={ classes.logo }>
          <ReactLogo width={ 50 } />
        </Box>
        <Box className={ classes.linksSideBar }>
          { mainNavigation.map((route) => (
            <IconBox key={ route.name } type={ route.name } active={ activeTab === route.name }>
              { route.component }
            </IconBox>
          ))}
        </Box>
      </Box>
        <IconBox
            type={ social.name }
            active={ activeTab === social.name }
        >
            { social.component }
        </IconBox>
    </Box>
  );
};
