import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    width: theme.spacing(100),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    background: 'white',
    borderRadius: 20,
  },
  title: {
    margin: theme.spacing(3),
  },
  column: {
    margin: theme.spacing(5),
    display: 'flex',
    flexFlow: 'column',
    width: '50%',
    justifyContent: 'space-around',
  },
  row: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));