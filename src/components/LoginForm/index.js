import './loginForm.css';

import React from 'react';
import { Formik } from 'formik';

import { useDispatch } from "react-redux";
import { signinWithGoogle } from '../../redux/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const LoginForm = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    return <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!values.password) {
                errors.password = 'Required';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            dispatch(handleSubmit(values.email, values.password));
            setSubmitting(false);
        }}
    >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="loginForm" >
                {isSubmitting ? <CircularProgress size="5rem" />
                    : <>
                        <FormControl className="fieldset">
                            <Input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email..." />
                            {errors.email && touched.email && <FormHelperText error>{errors.email}</FormHelperText>}
                        </FormControl>
                        <FormControl className="fieldset">
                            <Input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Password..." />
                            {errors.password && touched.password && <FormHelperText error>{errors.password}</FormHelperText>}
                        </FormControl>
                        <Button type="submit" disabled={isSubmitting}>Enter</Button>
                        <Button color="secondary" onClick={() => dispatch(signinWithGoogle())} >Google</Button>
                    </>
                }
            </form>
        )}
    </Formik>
}

export default LoginForm;
