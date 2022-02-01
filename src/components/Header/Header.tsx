import React from 'react';
import {
  Box,
  Typography,
  InputAdornment,
  Button,
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTextField, useClasses } from './Header.style';

export const Header = () => {
  
  const classes = useClasses();
  
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
          className={classes.modalBtn}
          variant='contained'
          color='primary'
        >
          Create new
        </Button>
      </Box>
    </Box>
  );
};
