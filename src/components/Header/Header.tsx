import React from 'react';
import {
  Box,
  Typography,
  InputAdornment,
  Button,
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTextField, useClasses } from './Header.style';
import { BoardMenu } from '../BoardMenu/BoardMenu';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export const Header = () => {

  const classes = useClasses();
  return (
    <Box className={ classes.container }>
      <Box className={ classes.nameHeader }>
        <Typography variant='h4' className={ classes.namePage } >
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
  );
};

