import React from 'react';
import classes from './profile.module.css';
import Posts from "./posts/posts";

const Profile = () => {
    return (
        <main className='main'>
            <div className={classes.picture}/>
            <div className={classes.profile}>
                <div className={classes.avatar}/>
                <div className={classes.description}>
                    <h2>Dmitry K.</h2>
                    <p>Date of Birth:</p>
                    <p>City:</p>
                    <p>Education:</p>
                    <p>Web site:</p>
                </div>
            </div>
            <Posts/>
        </main>
    )
};

export default Profile;
