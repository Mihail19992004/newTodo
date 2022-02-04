import { services } from '../../services';
import { makeAutoObservable } from 'mobx';

export class AuthorizationStore {
  
  constructor() {
    makeAutoObservable(this);
  }
  
  isAuth: boolean = false;
    
  login = (username: string, password: string) => {
    services.authorization.login(username, password);
  };
  
  registration = (username: string, password: string) => {
    services.authorization.registration(username, password).then(() => {

    });
  };
  
  logout = () => {
    
  };
    
}