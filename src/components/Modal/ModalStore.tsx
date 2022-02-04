import { makeAutoObservable } from 'mobx';
import { ReactElement } from 'react';

class ModalStore {
    
  constructor() {
    makeAutoObservable(this);
  }
      
  modalsMap: Array<{ key: string, element: ReactElement }> = [];


  createModal = (modal: ReactElement, key: string) => {
    this.modalsMap.push({ key, element: modal });
  };
  
  removeModal = (keyEl: string) => {
    this.modalsMap = this.modalsMap.filter(({ key }) => keyEl !== key);
  };
  
}

export default new ModalStore();