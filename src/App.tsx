import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SideBar } from './components/SideBar/SideBar';
import { MainContent } from './components/MainContent/MainContent';

const useStyle = makeStyles(() => ({
  App: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const App: FC = () => {

  const classes = useStyle();

  return (
    <Box className={ classes.App }>
      <SideBar />
      <MainContent />
    </Box>
  );
};
