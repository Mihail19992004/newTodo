import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));