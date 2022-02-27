import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  select : {
    // minWidth : '140px',
    display : 'flex',
    padding: '5px',
    '& svg' :{
      width : '8px',
    },
  },
  options : {
    display : 'flex',
  },
  name : {
    margin : '0 0 0 10px',
    color: '#262424',
    fontSize: '17px',
    letterSpacing: '1px',
    textTransform: 'capitalize',
  },
  labelText :{
    fontSize: '19px',
    textTransform: 'capitalize',
    color: 'gray',
  },
}));