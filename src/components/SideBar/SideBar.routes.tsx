import { NavProps } from '../../features';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExtensionIcon from '@mui/icons-material/Extension';
import PeopleIcon from '@mui/icons-material/People';
import PollIcon from '@mui/icons-material/Poll';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';


export const mainNavigation: NavProps[] = [
  {
    name: 'notification',
    component: <NotificationsIcon />,
  },
  {
    name: 'boards',
    component: <DashboardIcon />,
  },
  {
    name: 'extentsions',
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
