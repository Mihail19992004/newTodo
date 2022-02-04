import React, { FC, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Translate: FC = ({ children }) => {
  const { i18n: { changeLanguage } } = useTranslation();

  useEffect(() => {
    const locale = localStorage.getItem('locale');

    if ( !locale ) {
      localStorage.setItem('locale', 'ru');
      changeLanguage('ru');
    } else if (locale) {
      changeLanguage(locale);
    }

  }, []);
  return (
        <Box>
            { children }
        </Box>
  );
};