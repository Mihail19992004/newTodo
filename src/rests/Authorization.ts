import { PATH } from './Path';
import { httpClient } from './Client/httpClient';
import { AxiosResponse } from 'axios';
import { AuthorizationProps } from '../pages/AuthorizationPage';

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
    
  registration = (user: AuthorizationProps): Promise<AuthResponseProps> => {
    return httpClient.post( PATH.AUTH_REGISTRATION, { ...user })
      .then(({ data }: AxiosResponse<AuthResponseProps>) => data);
  };
  
  login = (user: AuthorizationProps): Promise<AuthResponseProps> => {
    return httpClient.post( PATH.AUTH_LOGIN, { ...user })
      .then(({ data }: AxiosResponse<AuthResponseProps>) => data);
  }; 
    
}