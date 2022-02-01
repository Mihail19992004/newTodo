import { PATH } from './Path';
import { httpClient } from '../httpClient';
import { AxiosResponse } from 'axios';

interface UserResponseProps {
  id: string;
  username: string;
  firstName?: string;
  secondName?: string;
  city?: string;
  role: string;
}

interface AuthResponseProps {
  token: string;
  user: UserResponseProps;
}

export class AuthorizationRest {
    
  registration = (username: string, password: string): Promise<AuthResponseProps> => {
    return httpClient.post( PATH.AUTH_REGISTRATION, { username, password })
      .then(({ data }: AxiosResponse<AuthResponseProps>) => data);
  };
  
  login = (username: string, password: string): Promise<AuthResponseProps> => {
    return httpClient.post( PATH.AUTH_LOGIN, { username, password })
      .then(({ data }: AxiosResponse<AuthResponseProps>) => data);
  }; 
    
}