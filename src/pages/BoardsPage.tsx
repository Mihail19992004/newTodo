import React from 'react';
import { Box } from '@material-ui/core';
import { Header } from '../components/Header';
import { BoardNavigation } from '../components/BoardNavigation';
import { BoardNavContainer } from '../components/BoardNavContainer/BoardNavContainer';

export const BoardsPage = () => {

  return (
    <Box>
      <Header />
      <BoardNavigation />
      <BoardNavContainer />
    </Box>
  );
};
