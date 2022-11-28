import * as Yup from 'yup';

export const basicSchema = Yup.object({
  from_name: Yup.string()
    .max(50, 'Too Long, max-char (50)')
    .required('* Name field is required'),
  subject: Yup.string()
    .max(64, 'Too Long, max-char (64)')
    .required('* Subject field is required'),
  reply_to: Yup.string()
    .trim()
    .max(254, 'Too Long, max-char (254)')
    .email('Invalid email address')
    .required('* Email field is required'),
  message: Yup.string().required('* Message field is required'),
});
