import React from 'react';
import {
  Box,
  Typography,
  InputAdornment,
  Button } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTextField, useClasses } from './Header.style';
import { t } from 'i18next';
import modalStore from '../Modal/ModalStore';
import { CreateTodoModal } from '../Modal/CreateTodoModal/CreateTodoModal';

export const Header = () => {
  
  const classes = useClasses();
  const { createModal } = modalStore;
  
  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant='h4' className={classes.namePage}>
            { t('My board') }
        </Typography>
      </Box>
      <Box className={classes.gridInput}>
        <SearchTextField
          placeholder={ t('Search task') }
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
          className={classes.modalBtn}
          variant='contained'
          color='primary'
          onClick={() => createModal(<CreateTodoModal />, 'CreateTodoModal_1')}
        >
            { t('Create new') }
        </Button>
      </Box>
    </Box>
  );
};
