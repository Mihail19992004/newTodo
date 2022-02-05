import * as yup from 'yup';

export const TodoScheme = yup.object().shape({
  title: yup.string().min(3, 'Минимальная длина имени пользователя 3 символа').required('Обязательное поле'),
  description: yup.string().min(3, 'Минимальная длина пароля 3 символа').required('Обязательное поле'),
  dateFinish: yup.date().required(),
  important: yup.string().required(),
}).required();