import { makeAutoObservable } from 'mobx';
import React, { ReactElement } from 'react';
import { ModalComponent } from '.';

class ModalStore {
    
  constructor() {
    makeAutoObservable(this);
  }
      
  modalsMap = new Map<string, ReactElement>();

  modals = Array(this.modalsMap);

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
    this.modalsMap.set(
      key,
      (<ModalComponent key={key}>{modal}</ModalComponent>),
    );
  };
  
  removeModal = (key: string) => {
    this.modalsMap.delete(key);
  };
  
}

export const modalStore = new ModalStore();