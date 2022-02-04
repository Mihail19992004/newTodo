import React from 'react';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import authStore from '../stores/Authorization/Authorization';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const useClasses = makeStyles((theme) => ({
  container: {
    background: '#b1fae8',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  modal: {
    width: '20%',
    height: theme.spacing(45),
    background: '#ffffff',
    border: '1px solid #419bc7',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    borderRadius: 10,
    padding: theme.spacing(4),
  },
  inputs: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export const AuthorizationScheme = yup.object().shape({
  username: yup.string().min(3, 'Минимальная длина имени пользователя 3 символа').required('Обязательное поле'),
  password: yup.string().min(3, 'Минимальная длина пароля 3 символа').required('Обязательное поле'),
}).required();

export interface AuthorizationProps {
  username: string
  password: string
}

export const AuthorizationPage = observer(() => {
    
  const classes = useClasses();
  const { t } = useTranslation();
  const { registration, login } = authStore;
  const { handleSubmit, formState: { errors }, register } = useForm<AuthorizationProps>({
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
        <Box className={classes.container}>
            <Box className={classes.modal}>
              <Typography variant='h6'>
                { t('Authorization') }
              </Typography>
              <Box className={classes.inputs}>

                    <TextField
                        type='text'
                        {...register('username')}
                        required
                        label={ t('User name') }
                        variant='outlined'
                        name='username'
                        id='username'
                        error={!!errors.username}
                    />
              </Box>
              <Box className={classes.inputs}>
                        <TextField
                            required
                            { ...register('password')}
                            label={ t('Password') }
                            variant='outlined'
                            name='password'
                            error={!!errors.password}
                        />
              </Box>
              <Box>
                <Button
                    form='authorization_form'
                    className={classes.button}
                    variant='outlined'
                    type='submit'
                    onClick={handleSubmit(onLogin)}
                >
                  { t('Login') }
                </Button>
                <Button
                    form='authorization_form'
                    className={classes.button}
                    variant='outlined'
                    type='submit'
                    onClick={handleSubmit(onRegistration)}
                >
                  { t('Registration') }
                </Button>
              </Box>
              
            </Box>
        </Box>
      </form>
  );
});