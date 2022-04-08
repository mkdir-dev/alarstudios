/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
  name: yup.string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле')
    .min(2, 'Не менее 2 символов')
    .max(20, 'Не более 20 символов'),
  phone: yup.string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
});