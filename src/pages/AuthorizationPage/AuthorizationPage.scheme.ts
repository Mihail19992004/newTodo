import * as yup from 'yup';

export const AuthorizationScheme = yup.object().shape({
  username: yup.string().min(3, 'Минимальная длина имени пользователя 3 символа').required('Обязательное поле'),
  password: yup.string().min(3, 'Минимальная длина пароля 3 символа').required('Обязательное поле'),
}).required();

export interface AuthorizationProps {
  username: string
  password: string
}