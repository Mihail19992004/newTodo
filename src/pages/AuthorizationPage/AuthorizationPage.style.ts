import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    background: '#b1fae8',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  modal: {
    width: '20%',
    height: theme.spacing(45),
    background: '#ffffff',
    border: '1px solid #419bc7',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    borderRadius: 10,
    padding: theme.spacing(4),
  },
  inputs: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));