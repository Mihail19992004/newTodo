import React from 'react';
import { Box, MenuItem, TextField, Typography, Select, InputLabel, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import modalStore from '../ModalStore';
import { TodoScheme } from './CreateTodoModal.scheme';
import todoStore from '../../../stores/Todo/Todo';
import { useClasses } from './CreateTodoModal.style';
import { TodoProps } from '../../../features/TodoProps';


export const CreateTodoModal = () => {
    
  const { t } = useTranslation();
  const classes = useClasses();
  const { control, handleSubmit, register, formState: { errors } } = useForm<Omit<TodoProps, 'id' | 'dateStart' | 'status'>>({
    mode: 'all',
    resolver: yupResolver(TodoScheme),
  });
  const { createTodo } = todoStore;
  const { field: { onChange: onChangeSelect, value: selectValue } } = useController({ name: 'important', control });
  const { removeModal } = modalStore;
  const onSubmit = (data: Omit<TodoProps, 'dateStart' | 'id' | 'status'>) => {
    createTodo({ ...data, id: Date.now(), dateStart: Date.now().toLocaleString(), status: 'create' });
  };

  return (
      <form
          id='create_form'
          onSubmit={handleSubmit(onSubmit)}
      >
        <Box className={ classes.container }>

            <Typography variant='h5' className={ classes.title }>
                { t('Add Todo') }
            </Typography>

            <TextField
                name='title'
                { ...register('title') }
                label={ t('Title') }
                variant='outlined'
                error={ !!errors.title }
            />

            <Box className={classes.row}>
                <Box className={classes.column}>
                        <InputLabel id="sl001">{ t('Important') }</InputLabel>
                        <Select
                            error={ !!errors.dateFinish }
                            label={ t('Important') }
                            labelId='sl001'
                            id='sl001'
                            onChange={ onChangeSelect }
                            value={ selectValue }
                            variant='outlined'
                        >
                            <MenuItem value='Very important'>{ t('Very important') }</MenuItem>
                            <MenuItem value='Important'>{ t('Important') }</MenuItem>
                            <MenuItem value='Do not rush'>{ t('Does not matter') }</MenuItem>
                        </Select>
                    <TextField
                        label={ t('Date end') }
                        type='date'
                        { ...register('dateFinish') }
                        variant='outlined'
                        error={ !!errors.dateFinish }
                    />
                </Box>
                <Box className={classes.column}>
                    <TextField
                        name='description'
                        { ...register('description') }
                        label={ t('Description') }
                        multiline rows={ 6 }
                        variant='outlined'
                        error={ !!errors.description }
                    />
                </Box>
            </Box>
            <Box className={classes.button}>
               <Button variant='outlined' onClick={ () => removeModal('CreateTodoModal_1') }>
                <Typography>
                    { t('Cancel') }
                </Typography>
            </Button>
               <Button
                   form='create_form'
                   variant='outlined'
                   onClick={handleSubmit(onSubmit)}
               >
                   <Typography>
                       { t('Create') }
                   </Typography>
               </Button> 
            </Box>

        </Box>
      </form>
  );
};