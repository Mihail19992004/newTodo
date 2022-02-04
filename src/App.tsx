import React, { FC, useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SideBar } from './components/SideBar';
import { MainContent } from './components/MainContent';
import { changeLanguage } from 'i18next';

const useStyle = makeStyles(() => ({
  App: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const App: FC = () => {

  const classes = useStyle();
  useEffect(() => {
    const locale = localStorage.getItem('locale');

    if ( !locale ) {
      localStorage.setItem('locale', 'ru');
      changeLanguage('ru');
    } else if (locale) {
      changeLanguage(locale);
    }

  }, []);



  return (
    <Box className={ classes.App }>
      <SideBar />
      <MainContent />
    </Box>
  );
};
