import React from 'react';
import  modalStore from './ModalStore';
import { observer } from 'mobx-react';
import { ModalComponent } from './ModalComponent';

export const Modals = observer(() => {

  const { modalsMap } = modalStore;

  return (
            <>
                {
                    modalsMap.map(({ element, key }) => (
                        <ModalComponent key={Date.now()} modalId={key}>
                            {element}
                        </ModalComponent>
                        
                    ))
                }
            </>
  );
});