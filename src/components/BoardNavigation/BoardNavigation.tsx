import { Box, Tab, Tabs } from '@material-ui/core';
import React, { FC, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { boardNav } from './Board.routes';
export const BoardNavigation: FC = () => {

  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();
  const activeTab = useMemo((): string => pathname.split('/')[2], [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const indexNamber = boardNav.findIndex((e) => e.link === activeTab);
    setValue(indexNamber);
  }, [activeTab]);

  return (
    <Box sx={ { width: '100%' } }>
      <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
        <Tabs value={ value } onChange={ handleChange } indicatorColor='primary'>
          { boardNav.map((tabsitem) => (
            <Tab
              key={ tabsitem.name }
              label={ tabsitem.name }
              component={ Link }
              to={ `/boards/${ tabsitem.link }` }
            />
          )) }
        </Tabs>
      </Box>
    </Box>
  );
};
