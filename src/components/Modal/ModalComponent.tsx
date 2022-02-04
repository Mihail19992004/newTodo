import React, { FC, ReactElement } from 'react';
import { Box, IconButton } from '@material-ui/core';
import { useClasses } from './ModalComponent.style';
import modalStore from './ModalStore';
import { observer } from 'mobx-react';
import CloseIcon from '@mui/icons-material/Close';

interface ModalComponentProps {
  children: ReactElement;
  modalId: string
}

export const ModalComponent: FC<ModalComponentProps> = observer(({ children, modalId }) => {
    
  const classes = useClasses();
  const { removeModal } = modalStore;

  const closeModal = () => {
    removeModal(modalId);
  };

  return (
        <Box className={classes.container}>
            <Box className={classes.modal}>
                <IconButton className={classes.closeIcon} onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
                {children}
            </Box>
        </Box>
  );
});