import { AuthorizationRest } from '../rests/Authorization';

class Services {
  authorization = new AuthorizationRest();
}

export const services = new Services();