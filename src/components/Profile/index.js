import './profile.css';
import React from 'react';

import { useDispatch } from 'react-redux';
import { signout } from '../../redux/actions'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const Profile = ({ username, userEmail, imageURL }) => {

    const dispatch = useDispatch();

    return (
        <div className="profile">
            <Avatar className="profile__avatar" src={imageURL} />
            <h3 className="profile__info">Name: {username}</h3>
            <h3 className="profile__info">Email: {userEmail}</h3>
            <Button color="secondary" onClick={() => dispatch(signout())}>Sign out</Button>
        </div>
    )
}

export default Profile;
