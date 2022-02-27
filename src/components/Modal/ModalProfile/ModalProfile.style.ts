import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  boxProfile : {
    display : 'flex',
    alignItems: 'center',
    color: 'gray',
    fontSize: '20px',
  },
  parProfile : {
    marginLeft : '10px',
    fontSize: '15px',

  },
  img : {
    width : '30px',
    height : '30px',
  },
}));