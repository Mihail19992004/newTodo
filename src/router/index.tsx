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
  BOARDSPAGE = '/boards',
  EXTENSIONPAGE = '/extentsions',
  PEOPLEPAGE = '/people',
  CHARTPAGE = '/chart',
  SETTINGSPAGE = '/settings',
}

export const boardsRoutes: IRoute[] = [
  { path: RouteNames.NOTIFICATION, exact: true, component: NotificationsPage },
  { path: RouteNames.BOARDSPAGE, exact: true, component: BoardsPage },
  { path: RouteNames.EXTENSIONPAGE, exact: true, component: ExtensionPage },
  { path: RouteNames.PEOPLEPAGE, exact: true, component: PeoplePage },
  { path: RouteNames.CHARTPAGE, exact: true, component: ChartPage },
  { path: RouteNames.SETTINGSPAGE, exact: true, component: SettingsPage },
];
