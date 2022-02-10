import React from 'react';
import { Box } from '@material-ui/core';
import { Header } from '../../components/Header';
import { BoardNavigation } from '../../components/BoardNavigation';
import { BoardNavContainer } from '../../components/BoardNavContainer/BoardNavContainer';
import { BoardPageOptional } from './BoardPageOptional';
import { useTranslation } from 'react-i18next';

export const BoardsPage = () => {

  const { t } = useTranslation();
    
  return (
    <Box>
      <Header title={  t('My board') } optionalComponent={ <BoardPageOptional />} />
      <BoardNavigation />
      <BoardNavContainer />
    </Box>
  );
};
