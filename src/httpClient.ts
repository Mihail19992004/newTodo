import axios from 'axios';

// interface Params {
//   params: Record<string, unknown>
// }

class HttpClient {
    
  private client = ( method: 'post' | 'put' | 'get' | 'delete', url: string, data?: Record<string, unknown> ) => {

    return axios({
      method,
      baseURL: 'https://infinite-badlands-96749.herokuapp.com/',
      // baseURL: 'http://localhost:5000',
      url,
      data,
    }).then(response => response);
  };
  
  get = ( url: string ) => {
    return this.client('get', url );
  };
  
  getById = ( url: string, id: number) => {
    return this.client( 'get', `${url}/${id}`);
  };
  
  post = (url: string, data: Record<string, unknown>) => {
    return this.client('post', url, data);
  };
  
  put = (url: string, id: number, data: Record<string, unknown>) => {
    return this.client('put', `${url}/${id}`, data);
  };
  
  delete = (url: string, id: number) => {
    return this.client('delete', `${url}/${id}`);
  };

}

export const httpClient = new HttpClient();
