import { AuthorizationRest } from '../rests/Authorization';
import { TodoRest } from '../rests/TodoRest';

class Services {
  authorization = new AuthorizationRest();

  todo = new TodoRest();
}

export const services = new Services();