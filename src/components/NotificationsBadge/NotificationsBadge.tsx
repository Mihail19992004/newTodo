import React, { FC } from 'react';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const NotificationsBadge: FC = () => {

  const badgeCount = 5;
  return (
    <Badge color='primary' badgeContent={ badgeCount }>
      <NotificationsIcon />
    </Badge>
  );
};
