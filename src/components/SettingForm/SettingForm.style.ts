import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
  },
  leftContainer: {
    width: '50%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
  },
  namePage: {
    fontWeight: 'bold',
    fontSize: '38px',
  },
  buttons: {
    marginLeft: theme.spacing(2),
  },
  settingFont: {
    fontSize: 20,
    paddingRight: theme.spacing(5),
  },
}));