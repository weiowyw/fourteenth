import React from 'react';
import {useFormik} from "formik";
import './Counter.css'
import formikSchema from "./FormikSchema";

const FormikCounter = () => {

    const formSubmit = () => console.log('Form submitted')

    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: formikSchema,
        onSubmit: formSubmit

    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='main_container'>
                <div className='counter_container'>
                    <h1 className='container_title'>{formik.values.email}</h1>
            <label htmlFor='email'>Click me</label>
            <input
            value={formik.values.email}
            type='email'
            placeholder='example@gmail.com'
            id='email'
            onChange={formik.handleChange}
            />
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
            <label htmlFor='password'>pw</label>
            <input
            value={formik.values.password}
            type='password'
            placeholder='Password here'
            id='password'
            onChange={formik.handleChange}
            />
                    {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                    )}
            <label htmlFor='confirmPassword'>confirm pw</label>
                <input
                    value={formik.values.confirmPassword}
                    type='password'
                    placeholder='Confirm password here'
                    id='confirmPassword'
                    onChange={formik.handleChange}
                />
                    {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                    )}
                    <button className='button_element'>Sd</button>

                </div>
        </div>
        </form>
    );
};

export default FormikCounter;