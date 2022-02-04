import React from 'react';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { t } from 'i18next';
import { useClasses } from './LanguageSetting.style';
import { Controller, useFormContext } from 'react-hook-form';

export const LanguageSetting = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useClasses();
  const { control, setValue } = useFormContext();
  const onChangeLocale = (locale: string) => {
    setValue( 'locale', locale);
  };

  return (
      <Box>
        <Typography>
          { t('Language setting') }
        </Typography>
          <FormControl>
              <Controller
                  name='locale'
                  control={ control }
                  render={ ({ field }) => (
                      <RadioGroup
                          {...field}
                          defaultChecked
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={(_, value) => onChangeLocale(value)}
                      >
                          <FormControlLabel value="ru" control={<Radio />} label={t('Russian')} />
                          <FormControlLabel value="en" control={<Radio />} label={t('English')} />
                      </RadioGroup>
                  ) }
              />
          </FormControl>
      </Box>
  );
};
