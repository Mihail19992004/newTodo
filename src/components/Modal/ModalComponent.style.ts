import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    zIndex: 10,
    background: 'rgba(0,0,0,0.28)',
  },
  modal: {
    position: 'relative',
    background: 'white',
    borderRadius: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));