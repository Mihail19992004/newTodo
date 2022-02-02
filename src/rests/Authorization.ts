import { PATH } from './Path';
import { httpClient } from '../httpClient';

export class AuthorizationRest {
    
  registration = (username: string, password: string): Promise<any> => {
    return httpClient.post( PATH.AUTH_REGISTRATION, { username, password });
  };
  
  login = (username: string, password: string) => {
    return httpClient.post( PATH.AUTH_LOGIN, { username, password });
  }; 
    
}