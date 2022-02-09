import { makeStyles, styled, TextField } from '@material-ui/core';

export const useClasses = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '48px',
    marginBottom: '42px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  '.MuiFormControl-root' : {
    width : '100%',
  },
  searchInput: {
    width : '100%',
    padding: '14.5px 14px',
  },
  namePage: {
    fontWeight: 'bold',
    fontSize: '38px',
  },
  flexInput: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
  },
  searchCon: {
    display: 'flex',
    alignItems: 'center',
    width : '70%',
  },
  linkSvg: {
    fill: '#ccccd7',
  },
  marLink : {
    marginRight : '20px',
    padding : 0,
  },
  modalbtn: {
    marginLeft: '50px',
    height: '47px',
    textTransform: 'initial',
    fontWeight: 600,
    minWidth: '130px',
    border: '2px solid #341EFF',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    },
  },
  inputControl : {
    minWidth : '250px',
    maxWidth : '400px',
    width : '100%',
  },
}));

export const SearchTextField = styled(TextField)({
  '& .MuiFormControl-root' : {
    width : '100%',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccccd7',
      cursor: 'pointer',
    },
    '&:hover fieldset': {
      borderColor: '#050505',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#050505',
    },
  },
});