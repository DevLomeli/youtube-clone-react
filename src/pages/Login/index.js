import './loginPage.css';
import React from 'react';

import { useSelector } from 'react-redux';
import { signinUser } from '../../redux/actions';

import LoginForm from '../../components/LoginForm';
import Profile from '../../components/Profile';


const Login = () => {

    const { user } = useSelector(state => state.login);

    return (
        <section className="container">
            <div className="loginWrapper">
                {user
                    ? <Profile username={user.displayName} imageURL={user.photoURL} userEmail={user.email} />
                    : <LoginForm handleSubmit={signinUser} />}
            </div>
        </section>
    )
}

export default Login;
