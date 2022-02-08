import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  alert: {
    position: 'absolute',
    zIndex: 100,
    margin: theme.spacing(5),
  },
}));