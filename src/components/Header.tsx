import React from 'react'
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  InputAdornment,
  styled,
  Button,
} from '@material-ui/core'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'

const useStyle = makeStyles(() => ({
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
  modalbtn: {
    fontWeight: 'bold',
    height: '47px',
  },
}))

const SearchTextField = styled(TextField)({
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
})

export const Header = () => {
  const classes = useStyle()
  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant='h4' className={classes.namePage}>
          My board
        </Typography>
      </Box>
      <Box className={classes.gridInput}>
        <SearchTextField
          placeholder='Search text'
          InputProps={{
            classes: { input: classes.searchInput },
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon fill='#ccccd7' />
              </InputAdornment>
            ),
          }}
          variant='outlined'
        />
        <Button
          className={classes.modalbtn}
          variant='contained'
          color='primary'
        >
          Create new
        </Button>
      </Box>
    </Box>
  )
}
