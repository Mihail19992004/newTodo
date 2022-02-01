import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    borderRight: '2px solid #fafafb',
    width: ' 80px',
    alignItems: 'center',
    padding: '30px 0',
  },
  sideBarContent: {
    width: '100%',
  },
  linksSideBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  logo: {
    marginBottom: ' 15px',
    textAlign: 'center',
  },
}));