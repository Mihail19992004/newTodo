import React, { useCallback } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import modalStore from '../ModalStore';
import authStore from '../../../stores/Authorization/Authorization';
import { useClasses } from './ConfirmModal.style';

export const ConfirmModal = () => {
    
  const { t } = useTranslation();
  const classes = useClasses();
  const { removeModal } = modalStore;
  const { deleteUser } = authStore;
  const onDelete = useCallback(() => {
    removeModal('confirm_delete_acc');
    deleteUser();
  }, [deleteUser, removeModal]);

  return (
        <Box className={ classes.container }>
            <Typography variant='h6'>
                { t('Are you sure you want to delete the user? All tasks associated with it will also be deleted.') }
            </Typography>
            <Box className={ classes.buttons }>
                <Button
                    variant='outlined'
                    onClick={ () => removeModal( 'confirm_delete_acc' )}
                >
                    { t('No') }
                </Button>
                <Button
                    onClick={ onDelete }
                    variant='outlined'
                >
                    { t('Yes') }
                </Button>
            </Box>
        </Box>
  );
};