import { services } from '../../services';
import { makeAutoObservable } from 'mobx';
import { AuthorizationProps } from '../../pages/AuthorizationPage';
import notification from '../Notification/Notification';
import { t } from 'i18next';
class AuthorizationStore {
  
  constructor() {
    makeAutoObservable(this);
    this.setIsAuth(localStorage.getItem('token'));
  }
  
  isAuth: boolean = false;
    
  setIsAuth = (token: string | null) => {
    this.isAuth = !!token;
    if (!!token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  };

  login = (data: AuthorizationProps) => {
    services.authorization.login(data).then(({ token }) => {
      this.setIsAuth(token);

      
    }).catch(() => notification.setNotification({ severity: 'error', text: t('Login error') }));
  };
  
  registration = (data: AuthorizationProps) => {
    services.authorization.registration(data).then(({ token }) => {
      this.setIsAuth(token);
      
    }).catch(() => notification.setNotification({ text: t('Registration error'), severity: 'error' }));
  };
  
  logout = () => {
    this.setIsAuth(null);
  };
    
}

export default new AuthorizationStore();