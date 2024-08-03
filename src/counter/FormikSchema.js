import * as Yup from 'yup'

const formikSchema = Yup.object().shape({
    email: Yup.string()
        .email('Not an emial')
        .required('Field is required'),
    password: Yup.string().min(8).required('Field is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'pws must match')

})
export default formikSchema;