import { services } from '../../services';
import { makeAutoObservable } from 'mobx';
import { AuthorizationProps } from '../../pages/AuthorizationPage';
import notification from '../Notification/Notification';
import { t } from 'i18next';
class AuthorizationStore {
  
  constructor() {
    makeAutoObservable(this);
    this.setIsAuth(localStorage.getItem('token'), localStorage.getItem('id'));
  }
  
  isAuth: boolean = false;

  id: string | null;

  token: string | null; 
    
  setIsAuth = (token: string | null, id: string | null) => {
    this.isAuth = !!token;
    this.token = token;
    this.id = id;
    if (!!token) {
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
    }
  };

  login = (data: AuthorizationProps) => {
    services.authorization.login(data).then(({ token, user: { id } }) => {
      this.setIsAuth(token, id);

      
    });
  };
  
  registration = (data: AuthorizationProps) => {
    services.authorization.registration(data).then(({ token, user: { id } }) => {
      this.setIsAuth(token, id);
      
    });
  };
  
  logout = () => {
    this.setIsAuth(null, null);
  };
  
  deleteUser = () => {
    services.authorization.deleteUser(this.id).then(() => this.logout()).then(() => notification.setNotification({ text: t('User deleted'), severity: 'info' }));
  };
    
}

export default new AuthorizationStore();