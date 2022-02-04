import { makeAutoObservable } from 'mobx';
import React, { ReactElement } from 'react';
import { ModalComponent } from '.';

class ModalStore {
    
  constructor() {
    makeAutoObservable(this);
  }
      
  modalsMap: Array<{ key: string, element: ReactElement }> = [];



  isOpenModal: boolean = false;

  component?: ReactElement;
  
  open = (): void => {
    this.isOpenModal = true;
  };

  close = (): void => {
    this.isOpenModal = false;
  };
  
  setComponent = (element: ReactElement) => {
    this.component = element;
  };
  
  removeComponent = () => {
    this.component = undefined;
  };
  
  createModal = (modal: ReactElement, key: string) => {
    this.modalsMap.push({ key, element: <ModalComponent key={key}>{modal}</ModalComponent> });
  };
  
  removeModal = (keyEl: string) => {
    this.modalsMap = this.modalsMap.filter(({ key }) => keyEl !== key);
  };
  
}

export default new ModalStore();