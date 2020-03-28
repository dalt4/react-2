import React from 'react';
import classes from './header.module.css';
import logo from '../../logo.svg'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="wrapper">
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <img src={logo} alt="logo" className={classes.logo_img}/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
