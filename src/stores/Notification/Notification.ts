import { makeAutoObservable } from 'mobx';

export interface NotificationProps {
  severity: 'error' | 'warning' | 'info' | 'success',
  text: string
}

class Notification {
    
  constructor() {
    makeAutoObservable(this);
  }
  
  notification: NotificationProps | null = null;
  
  setNotification = (prop: NotificationProps) => {
    this.notification = prop;
    setTimeout(() => this.notification = null, 3000);
  };
  
}

export default new Notification();