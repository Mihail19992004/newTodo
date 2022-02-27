import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    width: theme.spacing(130),
    padding: '15px 20px',
    minHeight: '500px',
    display: 'flex',
  },
  mainForm: {
    flex: 1,
  },
  confirmForm: {
    width: '30%',
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '30px',
  },
  title: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: 'grey',
  },
  column: {
    margin: theme.spacing(5),
    display: 'flex',
    flexFlow: 'column',
    width: '50%',
    justifyContent: 'space-around',
  },
  row: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(2),
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& p':{
      letterSpacing: '1px',
      fontWeight: 'bold',
      textTransform: 'initial',
    },
  },
  confirmnBtn : {
    marginLeft : '15px',
    border: '2px solid #341EFF',
    boxShadow: 'none',
    backgroundColor : theme.palette.primary.main, 
    color : 'white', 
    '&:hover': {
      boxShadow: 'none',
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    },
  },
  modalName : {
    display : 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding:'6px 0',
  },
  modalMainForm : {
    width: '100%',
  },
  createTasks : {
    fontSize: '35px',
    color: '#000',
    fontWeight: 'bold',
    marginBottom : '15px',
  },
  mainCreateForm : {
    width : '100%',
  },
}));
