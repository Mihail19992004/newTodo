import React, { FormEvent, useMemo, useState } from 'react';
import { SettingsFormProps, UseSettingFormProps, UseSettingForm } from '../../features/Settings';
import { FormProvider, useController, useForm } from 'react-hook-form';
import { MenuItem, Box, Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import { useClasses } from './SettingForm.style';

export const useSettingForm = (props: UseSettingFormProps): UseSettingForm => {

  const { id, onSubmit, onReset } = props;

  const locale = useMemo((): 'ru' | 'en' => {
    const lang = localStorage.getItem('i18nextLng');

    if (lang === 'ru' || lang === 'en') {
      return lang;
    }

    return 'ru';
  }, [ onSubmit ]);


  const [defaultValues, setDefaultValue] = useState<SettingsFormProps>({ locale });
  const { t } = useTranslation();
  const classes = useClasses();

  const form = useForm<SettingsFormProps>({
    mode: 'all',
    defaultValues,
  });


  const { control } = form;
  const { field: { onChange: onChangeLocale, value: valueLocale } } = useController({ name: 'locale', control });
  const onSubmitForm = (event: FormEvent<HTMLFormElement>): Promise<void> =>
    form.handleSubmit(data => {
      setDefaultValue(data);
      return onSubmit && onSubmit(data, event);
    })(event);

  const onResetForm = (event: FormEvent<HTMLFormElement>): void => onReset && onReset(form.getValues(), event);
  return {

    Form: (
        <FormProvider { ...form }>
          <Box className={ classes.container }>
            <Typography className={ classes.namePage }>
              { t('Application setting') }
            </Typography>
            <form
                className={ classes.container }
                id={ id }
                onSubmit={ onSubmitForm }
                onReset={ onResetForm }
            >
              <Box className={ classes.leftContainer }>
                <Box p={ 2 } display='flex' alignItems='center'>
                  <Typography className={ classes.settingFont }>
                    { t('Application language') }:
                  </Typography>
                  <Select
                      name='locale'
                      variant='outlined'
                      style={{ width: 200 }}
                      onChange={ onChangeLocale }
                      value={ valueLocale }
                  >
                    <MenuItem value="ru">{ t('Russian') }</MenuItem>
                    <MenuItem value="en">{ t('English') }</MenuItem>
                  </Select>
                </Box>
              </Box>
            </form>
          </Box>
        </FormProvider>
    ),
    isValid: form.formState.isValid,
    formMethods: form,
    isDirty: form.getValues().locale && JSON.stringify(form.getValues()) !== JSON.stringify(defaultValues),
  };

};