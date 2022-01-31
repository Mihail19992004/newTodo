import React from 'react';
import { BoardsPage } from '../pages/BoardsPage';


export interface IRoute {
  path: string //Путь роута
  component: React.ComponentType // Компонент который мы рендерим при роуте
  exact?: boolean // Однозначно индефицироваить маршрут
}

export enum RouteNames {
  BOARDSPAGE = '/board',
}
//Список роутов
export const boardsRoutes: IRoute[] = [
  { path: RouteNames.BOARDSPAGE, exact: true, component: BoardsPage }, 
  { path: RouteNames.BOARDSPAGE, exact: true, component: BoardsPage }, 
  { path: RouteNames.BOARDSPAGE, exact: true, component: BoardsPage }, 
  { path: RouteNames.BOARDSPAGE, exact: true, component: BoardsPage },
];