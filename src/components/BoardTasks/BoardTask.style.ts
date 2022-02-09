import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  element: {
    width: '20%',
  },
}));