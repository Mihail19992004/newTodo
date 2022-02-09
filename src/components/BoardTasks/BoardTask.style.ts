import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row reverse',
  },
  element: {
    width: '20%',
    border: '1px solid black',
    height: theme.spacing(10),
  },
}));