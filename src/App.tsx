import React, { FC, Suspense } from 'react';
import { Box } from '@material-ui/core';
import { SideBar } from './components/SideBar';
import { MainContent } from './components/MainContent';
import { Translate } from './components/Translate/Translate';
import { Authorization } from './components/Authorization/Authorization';
import { Notification } from './components/Notification';
import { useClasses } from './theme/App.style';
import { LoaderTranslation } from './components/LoaderTranslation';

export const App: FC = () => {
  
  const classes = useClasses();

  return (
      <Suspense fallback={ <LoaderTranslation /> }>
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


