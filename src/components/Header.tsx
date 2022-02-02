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
import SearchIcon from '@mui/icons-material/Search'
import { BoardMenu } from './BoardMenu'
import InsertLinkIcon from '@mui/icons-material/InsertLink'

const useStyle = makeStyles((theme) => ({
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
    <Box className={ classes.container }>
      <Box className={ classes.nameHeader }>
        <Typography variant='h4' className={ classes.namePage }>
          My board
        </Typography>
      </Box>
      <Box className={ classes.flexInput }>
        <Box className={ classes.searchCon }>
          <InsertLinkIcon className={ classes.linkSvg } />
          <BoardMenu />
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
        </Box>
        <Button className={ classes.modalbtn } variant='contained' color='primary'>
          Create new
        </Button>
      </Box>
    </Box>
  )
}
