import React from 'react';
import { BoardsPage } from '../pages/BoardsPage/BoardsPage';
import { ChartPage } from '../pages/ChartPage';
import { ExtensionPage } from '../pages/ExtensionPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { PeoplePage } from '../pages/PeoplePage';
import { SettingsPage } from '../pages/SettingsPage';
import { SocialPage } from '../pages/SocialPage/SocialPage';

export interface IRoute {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export enum RouteNames {
  NOTIFICATION_PAGE = '/notification',
  BOARDS_PAGE = '/boards',
  EXTENSION_PAGE = '/extentsions',
  PEOPLE_PAGE = '/people',
  CHART_PAGE = '/chart',
  SETTINGS_PAGE = '/settings',
  SOCIAL_PAGE = '/social',
}

export const boardsRoutes: IRoute[] = [
  { path: RouteNames.NOTIFICATION_PAGE, component: NotificationsPage },
  { path: RouteNames.BOARDS_PAGE, component: BoardsPage },
  { path: RouteNames.EXTENSION_PAGE, component: ExtensionPage },
  { path: RouteNames.PEOPLE_PAGE, component: PeoplePage },
  { path: RouteNames.CHART_PAGE, component: ChartPage },
  { path: RouteNames.SETTINGS_PAGE, component: SettingsPage },
  { path: RouteNames.SOCIAL_PAGE, component: SocialPage },
];

