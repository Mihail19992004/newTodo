import { Box, Tab , Tabs } from '@material-ui/core';
import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { boardNav } from './Board.routes';
export const BoardNavigation: FC = () => {

  const { pathname } = useLocation();
  const activeTab = useMemo((): string => pathname.split('/')[2], [pathname]);
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={activeTab} aria-label="nav tabs example">
        {
          boardNav.map(nav => (
            <Tab label={ nav.name } value={ nav.name } component={ Link } to={ `/boards${nav.link}` } />
          ))
        }
      </Tabs>
    </Box>
  );
};


