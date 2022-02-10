import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  buttons: {
    marginTop: theme.spacing(5),
    '& >*': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));