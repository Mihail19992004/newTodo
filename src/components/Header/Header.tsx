import React from 'react';
import {
  Box,
  Typography,
  InputAdornment,
  Button, IconButton,
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { SearchTextField, useClasses } from './Header.style';
import { t } from 'i18next';
import { BoardMenu } from '../BoardMenu';

export const Header = () => {

  const classes = useClasses();
  
  return (
    <Box className={ classes.container }>
      <Box>
        <Typography variant='h4' className={ classes.namePage } >
            { t('My board') }
        </Typography>
      </Box>
      <Box className={ classes.flexInput }>
        <Box className={ classes.searchCon }>
          <IconButton className={ classes.marLink }>
            <InsertLinkIcon className={ classes.linkSvg } />
          </IconButton>
          <IconButton className={ classes.marLink }>
            <BoardMenu />
          </IconButton>
          <SearchTextField
            className={ classes.inputControl }
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
            { t('Create new') }
        </Button>
      </Box>
    </Box>
  );
};

