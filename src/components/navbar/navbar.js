import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <nav>
                <div className={classes.link}>
                    <NavLink to ="/profile">Profile</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to ="/dialogs">Messages</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to ="/news">News</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to ="/music">Music</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to ="/settings">Settings</NavLink>
                </div>
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
