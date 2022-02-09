import { httpClient } from './Client/httpClient';
import { PATH } from './Path';
import { AxiosResponse } from 'axios';
import { TodoProps } from '../features/TodoProps';

export class TodoRest {
    
  allElements?: TodoProps[];   
  
  get = (): Promise<{ elements: Array<TodoProps> }> => {
    return httpClient.get( PATH.TODO )
      .then(({ data }: AxiosResponse<{ elements :Array<TodoProps> }> ) => (data));
  };
  
  post = (todo: TodoProps): Promise<Array<TodoProps>> => {
    return httpClient.post( PATH.TODO, { ...todo } )
      .then(({ data }: AxiosResponse<Array<TodoProps>>) => data);
  };

  update = (todo: TodoProps): Promise<Array<TodoProps>> => {
    return httpClient.post( PATH.TODO, { ...todo } )
      .then(({ data }: AxiosResponse<Array<TodoProps>>) => data);
  };
  
  remove = (id: number): Promise<Array<TodoProps>> => {
    return httpClient.delete(PATH.TODO, id)
      .then(({ data }: AxiosResponse<Array<TodoProps>>) => data);
  };
  
}