import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import authStore from '../../stores/Authorization/Authorization';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useClasses } from './AuthorizationPage.style';
import { AuthorizationProps, AuthorizationScheme } from '.';

export const AuthorizationPage = observer(() => {
    
  const classes = useClasses();
  const { t } = useTranslation();
  const { registration, login } = authStore;
  const { handleSubmit, formState: { errors, isValid }, register } = useForm<AuthorizationProps>({
    resolver: yupResolver(AuthorizationScheme),
    mode: 'all',
  });

  const onRegistration = (data: AuthorizationProps) => {
    registration(data);
  };
  
  const onLogin = (data: AuthorizationProps) => {
    login(data);
  };

  return (
      <form id='authorization_form'>
        <Box className={ classes.container }>
            <Box className={ classes.modal }>
              <Typography variant='h6'>
                { t('Authorization') }
              </Typography>
              <Box className={ classes.inputs }>

                    <TextField
                        type='text'
                        { ...register('username') }
                        required
                        label={ t('User name') }
                        variant='outlined'
                        name='username'
                        id='username'
                        error={ !!errors.username }
                    />
              </Box>
              <Box className={classes.inputs}>
                        <TextField
                            required
                            { ...register('password')}
                            label={ t('Password') }
                            variant='outlined'
                            name='password'
                            error={ !!errors.password }
                        />
              </Box>
              <Box>
                <Button
                    form='authorization_form'
                    className={ classes.button }
                    variant='outlined'
                    type='submit'
                    onClick={ handleSubmit(onLogin) }
                    disabled={ !isValid }
                >
                  { t('Login') }
                </Button>
                <Button
                    form='authorization_form'
                    className={ classes.button }
                    variant='outlined'
                    type='submit'
                    disabled={ !isValid }
                    onClick={ handleSubmit(onRegistration) }
                >
                  { t('Registration') }
                </Button>
              </Box>
              
            </Box>
        </Box>
      </form>
  );
});