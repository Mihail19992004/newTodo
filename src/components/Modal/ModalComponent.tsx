import React, { FC, ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { useClasses } from './ModalComponent.style';
import modalStore from './ModalStore';
import { observer } from 'mobx-react';

interface ModalComponentProps {
  children: ReactElement;
  modalId?: string
}

export const ModalComponent: FC<ModalComponentProps> = observer(({ children }) => {
    
  const classes = useClasses();

  return (
        <Box className={classes.container} >
            <Box className={classes.modal}>
                {children}
            </Box>
        </Box>
  );
});