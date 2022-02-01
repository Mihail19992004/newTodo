import { makeStyles, styled, TextField } from '@material-ui/core';

export const useClasses = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '48px',
  },
  searchInput: {
    height: '100%',
    padding: '14.5px 14px',
  },
  namePage: {
    fontWeight: 'bold',
    fontSize: '38px',
  },
  gridInput: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyItems: 'end',
  },
  modalBtn: {
    fontWeight: 'bold',
    height: '47px',
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