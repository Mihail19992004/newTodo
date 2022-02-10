import React from 'react';
import { Box, Button, IconButton, InputAdornment, makeStyles } from '@material-ui/core';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { BoardMenu } from '../../components/BoardMenu';
import { SearchTextField } from '../../components/Header';
import SearchIcon from '@mui/icons-material/Search';
import { CreateTodoModal } from '../../components/Modal/CreateTodoModal';
import modalStore from '../../components/Modal/ModalStore';
import { useTranslation } from 'react-i18next';


export const useClasses = makeStyles((theme) => ({
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
  modalBtn: {
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


export const BoardPageOptional = () => {
    
  const classes = useClasses();
  const { createModal } = modalStore;  
  const { t } = useTranslation();
    
  return ( 
      <>
          <Box className={ classes.searchCon }>
        <IconButton className={ classes.marLink }>
            <InsertLinkIcon className={ classes.linkSvg } />
        </IconButton>
        <IconButton className={ classes.marLink }>
            <BoardMenu />
        </IconButton>
        <SearchTextField
            className={ classes.inputControl }
            placeholder={ t('Search tasks')}
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
        <Button onClick={() => createModal(<CreateTodoModal/>, 'create_todo_modal')} className={ classes.modalBtn } variant='contained' color='primary'>
            { t('Create new') }
        </Button>
        </>
  );
};