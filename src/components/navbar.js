import React from 'react';
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <nav>
                <div className={classes.link}><a href="#!">Profile</a></div>
                <div className={classes.link}><a href="#!">Messages</a></div>
                <div className={classes.link}><a href="#!">News</a></div>
                <div className={classes.link}><a href="#!">Music</a></div>
                <div className={classes.link}><a href="#!">Settings</a></div>
            </nav>
            <div className={classes.friends}>
                <p className={classes.title}>Friends</p>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <div className={classes.avatar}>
                            <img src="" alt=""/>
                        </div>
                        <p className={classes.name}>Andrew</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.avatar}>
                            <img src="" alt=""/>
                        </div>
                        <p className={classes.name}>Andrew</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.avatar}>
                            <img src="" alt=""/>
                        </div>
                        <p className={classes.name}>Andrew</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.avatar}>
                            <img src="" alt=""/>
                        </div>
                        <p className={classes.name}>Andrew</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Navbar;
