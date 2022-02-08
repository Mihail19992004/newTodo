import axios from 'axios';
import notification from '../../stores/Notification/Notification';
import authorization from '../../stores/Authorization/Authorization';
import { t } from 'i18next';

let config = {
  baseURL: 'https://rest-service-todo.herokuapp.com/',
};


const httpClientConfig = axios.create(config);


const authInterceptor = configAuth => {
  if (authorization.isAuth && authorization.token) {
    configAuth = { ...configAuth, 'Authorization' : `Bearer ${authorization.token}` };
  }
  return configAuth;
};

const loggerInterceptor = configLog => {

  return configLog;
};

httpClientConfig.interceptors.request.use(authInterceptor);
httpClientConfig.interceptors.request.use(loggerInterceptor);


httpClientConfig.interceptors.response.use(
  response => {
    
    return response;
  },
  (error: { response : { data: { message: string } } }) => {
    
    return notification.setNotification({ text: t(error.response.data.message), severity: 'error' });
  },
);

export { httpClientConfig };