import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  navLink: {
    position: 'relative',
    height: ' 68px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
    '&:hover , &:focus': {
      '& svg': {
        fill: '#050505',
      },
    },
    '& svg': {
      fill: '#ccccd7',
    },
  },
  active: {
    '& svg': {
      fill: '#050505 !important',
    },
    '&::after': {
      display: 'block',
      content: '""',
      backgroundColor: '#050505',
      height: '50%',
      width: '2px',
      left: '0%',
      top: '25%',
      position: 'absolute',
    },
  },
}));