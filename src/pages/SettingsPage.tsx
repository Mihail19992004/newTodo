import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { Button, makeStyles } from '@material-ui/core';
import { SettingsFormProps } from '../features/Settings';
import { useSettingForm } from '../components/SettingForm/SettingForm';

const useClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    height: '90vh',
  },
  containerSettings: {

  },
  button: {
    background: '#341EFF',
    color: 'white',
  },
}));

export const SettingsPage = () => {

  const classes = useClasses();
  const { i18n, t } = useTranslation();
  const onSubmitForm = (data: SettingsFormProps) => {
    i18n.changeLanguage(data.locale);
    localStorage.setItem('locale', data.locale);
    localStorage.setItem('i18nextLng', data.locale);
  };
  
  const { Form, isValid, isDirty } = useSettingForm({
    id: 'Setting_form',
    onSubmit: onSubmitForm,
  });


  return (
     <Box className={ classes.container }>
        <Box className={ classes.containerSettings }>
          { Form }
        </Box>
            <Box>
              <Button
                  className={ classes.button }
                  form='Setting_form'
                  type='submit'
                  disabled={ !isValid || !isDirty }
                  variant='contained'
              >
                { t('Save') }
              </Button>
            </Box>
     </Box>
  );
};
