import './loginPage.css';
import React from 'react';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    return (
        <section className="container">
            <div className="loginWrapper">
                <LoginForm />
            </div>
        </section>
    )
}

export default Login;
