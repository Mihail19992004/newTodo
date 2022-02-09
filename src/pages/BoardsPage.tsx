import React from 'react';
import { Box } from '@material-ui/core';
import { Header } from '../components/Header';
import { BoardNavigation } from '../components/BoardNavigation';

export const BoardsPage = () => {

  return (
    <Box>
      <Header />
      <BoardNavigation />
    </Box>
  );
};
