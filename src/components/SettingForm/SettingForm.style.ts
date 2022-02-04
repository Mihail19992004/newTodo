import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    height: '100%',
  },
  leftContainer: {
    paddingTop: theme.spacing(10),
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row',
  },
  namePage: {
    fontWeight: 'bold',
    fontSize: '38px',
  },
  settingFont: {
    fontSize: 20,
    paddingRight: theme.spacing(5),
  },
}));