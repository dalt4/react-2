import React from 'react';
import classes from './main.module.css';

const Main = () => {
    return (
        <main className={classes.main}>
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
            <div className={classes.posts}>
                <h2>My posts</h2>
                <form action="#">
                    <input type="text-area" placeholder='yours news...'/>
                    <input type="submit" value='Send'/>
                </form>
                <div className={classes.post}>
                    <div className={classes.avatar}/>
                    <p>No future</p>
                </div>
                <div className={classes.post}>
                    <div className={classes.avatar}/>
                    <p>No future</p>
                </div>
            </div>

        </main>
    )
};

export default Main;
