import { services } from '../../services';

export class AuthorizationStore {
    
  login = (username: string, password: string) => {
    services.authorization.login(username, password);
  };
  
  registration = (username: string, password: string) => {
    services.authorization.registration(username, password);
  };
    
}