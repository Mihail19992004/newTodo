import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  statusFlex: {
    display : 'flex',
    padding: '10px 27px',
    fontSize: '19px',
    textTransform: 'capitalize',
    borderRadius : '7px',
  },
  complete : {
    background : '#6baf6ed1',
    '& svg' : {
      width : '10px',
      fill : '#298b2d',
    },
  },
  inprogres : {
    background : '#e0e336bf',
    '& svg' : {
      width : '10px',
      fill : '#aeb122',
    },
  },
  create : {
    background : '#2196f3d4',
    '& svg' : {
      width : '10px',
      fill : '#0d558f',
    },
  },
  labelStatus: { 
    margin : 0,
    marginLeft: '10px',
  },
}));