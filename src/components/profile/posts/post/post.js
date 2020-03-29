import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src={props.imgSrc} alt="avatar"/>
            </div>
            <p>{props.message}</p>
        </div>
    )
};

export default Post;
