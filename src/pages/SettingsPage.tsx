import { t, changeLanguage } from 'i18next';
import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { Button, makeStyles } from '@material-ui/core';
import { LanguageSetting } from '../components/LanguageSetting';
import { FormProvider, useForm } from 'react-hook-form';
import { SettingsFormProps } from '../features/Settings';

const useClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  containerSettings: {

  },
  button: {

  },
}));

export const SettingsPage = () => {

  const classes = useClasses();
  const locale = useMemo((): 'ru' | 'en' => {
    const lang = localStorage.getItem('locale');
    
    if (lang === 'ru' || lang === 'en') {
      return lang;
    }
    
    return 'ru';
  }, []);
  
  
  const form = useForm<SettingsFormProps>({
    defaultValues: {
      locale,
    },
    
  });
  const { handleSubmit, formState: { isValid, isDirty }, getValues } = form;
  
  const onSubmit = (data: SettingsFormProps) => {
    // eslint-disable-next-line no-console
    console.log(data);
    changeLanguage(data.locale);
  };

  // eslint-disable-next-line no-console
  console.log(getValues());

  return (
      <Box className={classes.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...form}>
        <Box className={classes.containerSettings}>

                <LanguageSetting />

        </Box>
          <Box className={classes.button}>
            <Button
                disabled={ !isValid || !isDirty }
                variant='contained'
            >
              {t('Save')}
            </Button>
          </Box>
          </FormProvider>
        </form>
      </Box>
  );
};
