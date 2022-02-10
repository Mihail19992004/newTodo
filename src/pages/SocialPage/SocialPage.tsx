import React from 'react';
import { Box } from '@material-ui/core';
import { Header } from '../../components/Header';
import { useTranslation } from 'react-i18next';

export const SocialPage = () => {
    
  const { t } = useTranslation();
    
  return (
        <Box>
            <Header title={ t('Social page') } />
        </Box>
  );
};