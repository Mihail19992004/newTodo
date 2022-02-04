import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Alert } from '@mui/material';
import notificationStore from '../../stores/Notification/Notification';
import { useClasses } from './Notification.style';
import { Modals } from '../Modal/Modals';

export const Notification:FC = observer(({ children }) => {
    
  const classes = useClasses();
  
  const { notification } = notificationStore;
  return (
        <>
          {
            <Modals />
          }
            {!!notification &&
                <Alert  className={classes.alert} severity={notification.severity}> { notification.text } </Alert>
            }
            { children }
        </>
  );
});
