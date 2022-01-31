import React from 'react';
import Input from '@mui/material/Input';
import { Box, Typography, makeStyles } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const useStyle = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  namePage: {
    fontWeight: 'bold',
    fontSize: '40',
  },
}));
export const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Typography variant='h4' className={classes.namePage}>
        My board
      </Typography>
      <Box>2</Box>
      <Box>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
          <Input
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};
