import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  statusPanel:{
    marginTop : '20px',
    display : 'flex',
    flex : '1',
    flexDirection : 'column', 
  },
  filter : {
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height : '50px',
    marginBottom:' 10px',
  },
  labelText :{
    fontSize: '17px',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    color: 'gray',
  },
}));