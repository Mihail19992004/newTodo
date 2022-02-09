import { Box, makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { FC, ReactElement, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { boardNav } from './BoardNavigation.routes';

export const useClasses = makeStyles(() => ({
  elements: {
    width: '100%',
  },
  container: {
    borderBottom: 1,
    borderColor: 'divider',
  },
}));

export const BoardNavigation: FC = (): ReactElement => {

  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();
  const activeTab = useMemo((): string => pathname.split('/')[2], [pathname]);
  const classes = useClasses();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const indexNumber = boardNav.findIndex((e) => e.link === activeTab);
    setValue(indexNumber);
  }, [activeTab]);

  return (
    <Box className={ classes.elements }>
      <Box className={ classes.container }>
        <Tabs value={ value } onChange={ handleChange } indicatorColor='primary'>
          { boardNav.map((tabsItem) => (
            <Tab
              key={ tabsItem.name }
              label={ tabsItem.name }
              component={ Link }
              to={ `/boards/${ tabsItem.link }` }
            />
          )) }
        </Tabs>
      </Box>
    </Box>
  );
};
