import React from 'react';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
// import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import modalStore from '../ModalStore';
import { TodoScheme } from './CreateTodoModal.scheme';
import todoStore from '../../../stores/Todo/Todo';
import { useClasses } from './CreateTodoModal.style';
import { TodoProps } from '../../../features/TodoProps';
import AddIcon from '@mui/icons-material/Add';
import { ModalStatus } from '../Modalstatus/Modalstatus';
import { ModalSwitch } from '../ModalSwitch/ModalSwitch';

export const CreateTodoModal = () => {
  const { t } = useTranslation();
  const classes = useClasses();
  const {
    // control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Omit<TodoProps, 'id' | 'dateStart' | 'status'>>({
    mode: 'all',
    resolver: yupResolver(TodoScheme),
  });
  const { createTodo } = todoStore;
  // const {
  //   field: { onChange: onChangeSelect, value: selectValue },
  // } = useController({ name: 'important', control });
  const { removeModal } = modalStore;
  const onSubmit = (data: Omit<TodoProps, 'dateStart' | 'id' | 'status'>) => {
    createTodo({
      ...data,
      id: Date.now(),
      dateStart: Date.now().toLocaleString(),
      status: 'create',
    });
  };

  return (
    <form id='create_form' onSubmit={handleSubmit(onSubmit)}>
      <Box className={ classes.container }>
        <Box className={ classes.mainForm }>
          <Box className={ classes.modalName }>
            <Typography variant='h5' className={ classes.title }>
              Board / Create a task
            </Typography>
            <ModalSwitch />
          </Box>
          <Box className={ classes.modalMainForm }>
            <Typography variant='h3' className={ classes.createTasks }>
              Creating tasks
            </Typography>
            <Box className={ classes.mainCreateForm }>
              <TextField
                name='description'
                label='Enter description'
                variant='outlined'
                fullWidth
                multiline
                rows={6}
              />
              <Box>
                <Typography className={ classes.title }>
                  SUB-TUSKS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={ classes.confirmForm }>
          <TextField
            name='title'
            { ...register('title') }
            label={ t('Title') } 
            variant='outlined'
            error={ !!errors.title }
          />
          <ModalStatus />
          <Box className={ classes.button }>
            <Button variant='text' onClick={ () => removeModal('CreateTodoModal_1') }>
              <Typography>{ t('Cancel') }</Typography>
            </Button>
            <Button
              className={ classes.confirmnBtn }
              startIcon={ <AddIcon /> }
              form='create_form'
              variant='outlined'
              onClick={ handleSubmit(onSubmit) }
            >
              <Typography>{ t('Create') }</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
