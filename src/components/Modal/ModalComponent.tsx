import React, { FC, ReactElement } from 'react';
import { Box, IconButton } from '@material-ui/core';
import { useClasses } from './ModalComponent.style';
import modalStore from './ModalStore';
import { observer } from 'mobx-react';
import CloseIcon from '@mui/icons-material/Close';

interface ModalComponentProps {
  key: string;
  children: ReactElement;
}

export const ModalComponent: FC<ModalComponentProps> = observer(({ children, key }) => {
    
  const classes = useClasses();
  const { removeModal } = modalStore;
  const closeModal = () => {
    removeModal(key);
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