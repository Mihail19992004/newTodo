import { NavProps } from '../../features';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExtensionIcon from '@mui/icons-material/Extension';
import PeopleIcon from '@mui/icons-material/People';
import PollIcon from '@mui/icons-material/Poll';
import SettingsIcon from '@mui/icons-material/Settings';
import { NotificationsBadge } from '../NotificationsBadge/NotificationsBadge';
import React from 'react';


export const mainNavigation: NavProps[] = [
  {
    name: 'notification',
    component: <NotificationsBadge />,
  },
  {
    name: 'boards',
    component: <DashboardIcon />,
  },
  {
    name: 'extensions',
    component: <ExtensionIcon />,
  },
  {
    name: 'people',
    component: <PeopleIcon />,
  },
  {
    name: 'chart',
    component: <PollIcon />,
  },
  {
    name: 'settings',
    component: <SettingsIcon />,
  },
];
