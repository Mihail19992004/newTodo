import React from 'react';
import { modalStore } from './ModalStore';

const Modals = () => {
    
  const { modals } = modalStore;
  // eslint-disable-next-line no-console
  console.log(modals);
  return (
            <>
            {
                !!modals.length && modals.map(modal => (
                  { modal }
                ))   
            }
            </>
  );
};

export default Modals;