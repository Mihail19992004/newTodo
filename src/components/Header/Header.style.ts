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
  searchInput: {
    padding: '14.5px 14px',
  },
  namePage: {
    fontWeight: 'bold',
    fontSize: '38px',
  },
  flexInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  searchCon: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
  },
  linkSvg: {
    fill: '#ccccd7',
  },
  nameHeader: {
    width: '50%',
  },
  modalbtn: {
    height: '47px',
    textTransform: 'initial',
    fontWeight: 600,
    width: '130px',
    border: '2px solid #341EFF',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    },
  },
}));

export const SearchTextField = styled(TextField)({
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