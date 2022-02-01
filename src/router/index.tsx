import React from 'react';
import { BoardsPage } from '../pages/BoardsPage';
import { ChartPage } from '../pages/ChartPage';
import { ExtensionPage } from '../pages/ExtensionPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { PeoplePage } from '../pages/PeoplePage';
import { SettingsPage } from '../pages/SettingsPage';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  NOTIFICATION = '/notification',
  BOARDS_PAGE = '/boards',
  EXTENSION_PAGE = '/extensions',
  PEOPLE_PAGE = '/people',
  CHART_PAGE = '/chart',
  SETTINGS_PAGE = '/settings',
}

export const boardsRoutes: IRoute[] = [
  { path: RouteNames.NOTIFICATION, exact: true, component: NotificationsPage },
  { path: RouteNames.BOARDS_PAGE, exact: true, component: BoardsPage },
  { path: RouteNames.EXTENSION_PAGE, exact: true, component: ExtensionPage },
  { path: RouteNames.PEOPLE_PAGE, exact: true, component: PeoplePage },
  { path: RouteNames.CHART_PAGE, exact: true, component: ChartPage },
  { path: RouteNames.SETTINGS_PAGE, exact: true, component: SettingsPage },
];
