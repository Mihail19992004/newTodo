import { services } from '../../services';
import { makeAutoObservable } from 'mobx';
import { AuthorizationProps } from '../../pages/AuthorizationPage';
class AuthorizationStore {
  
  constructor() {
    makeAutoObservable(this);
    this.setIsAuth(localStorage.getItem('token'));
  }
  
  isAuth: boolean = false;

  token: string | null; 
    
  setIsAuth = (token: string | null) => {
    this.isAuth = !!token;
    this.token = token;
    if (!!token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  };

  login = (data: AuthorizationProps) => {
    services.authorization.login(data).then(({ token }) => {
      this.setIsAuth(token);

      
    });
  };
  
  registration = (data: AuthorizationProps) => {
    services.authorization.registration(data).then(({ token }) => {
      this.setIsAuth(token);
      
    });
  };
  
  logout = () => {
    this.setIsAuth(null);
  };
    
}

export default new AuthorizationStore();