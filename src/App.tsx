import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import { observer } from 'mobx-react';

const useStyle = makeStyles(() => ({
  App: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const App: FC = observer(() => {

  const classes = useStyle();
  // eslint-disable-next-line no-console
  console.log('test');
  return (

        <Box className={classes.App}>
          <SideBar />
          <MainContent />
        </Box>

  );
});

