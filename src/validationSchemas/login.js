import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email().required('Falta el correo boludin'),
    password: yup.string().min(8, 'Too short!').max(16, 'Too long!').required(),
});
