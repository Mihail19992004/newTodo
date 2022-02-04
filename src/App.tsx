import React, { FC, Suspense } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SideBar } from './components/SideBar';
import { MainContent } from './components/MainContent';
import { Translate } from './components/Translate/Translate';
import { Authorization } from './components/Authorization/Authorization';
import { Notification } from './components/Notification/Notification';

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

      <Suspense fallback={ <div>...Loading</div> }>
          <Translate>
              <Notification>
                <Authorization>
                    <Box className={ classes.App }>
                        <SideBar />
                        <MainContent />
                    </Box>
                </Authorization>
              </Notification>
          </Translate>
      </Suspense>
  );
};


