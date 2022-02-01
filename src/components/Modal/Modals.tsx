import React from 'react';
import  modalStore from './ModalStore';
import { observer } from 'mobx-react';

const Modals = observer(() => {

  const { modalsMap } = modalStore;

  // eslint-disable-next-line no-console
  // console.log(modalsMap);

  return (
            <>
                {
                    modalsMap.map(({ element }) => (
                      element 
                    ))
                }
            </>
  );
});

export default Modals;