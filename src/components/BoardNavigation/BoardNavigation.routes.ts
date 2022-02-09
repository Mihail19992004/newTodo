import { BoardPops } from '../../features';
import { BoardTasks } from '../BoardTasks/BoardTasks';
import BoardJoint from '../BoardJoint/BoardJoint';
import { BoardFavorites } from '../BoardFavorites/BoardFavorites';
import { BoardFilters } from '../BoardFilters/BoardFilters';

export const boardNav: BoardPops[] = [
  {
    name: 'My tasks',
    link: 'tasks',
    component: BoardTasks,
  },
  {
    name: 'Joint tasks',
    link: 'joint',
    component: BoardJoint,
  },
  {
    name: 'Favorites',
    link: 'favorites',
    component: BoardFavorites,
  },
  {
    name: 'Filters',
    link: 'filters',
    component: BoardFilters,
  },
];