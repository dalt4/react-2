import React from 'react';
import classes from './posts.module.css';
import Post from "./post/post";

const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <form action="#">
                <textarea placeholder='yours news...'/>
                <input type="submit" value='Send'/>
            </form>
            <Post message='No future!'
                  imgSrc='https://ae01.alicdn.com/kf/HTB1iAkidRsmBKNjSZFFq6AT9VXar/Terminator-T800-1-1.jpg_q50.jpg'/>
            <Post message='To future!'
                  imgSrc='https://ae01.alicdn.com/kf/HTB1CWrER8LoK1RjSZFuq6xn0XXad/Estatua-de-resina-Estartek-Terminator-T800-Arnold-Kit-de-modelismo-para-Fans-Regalo-De-vacaciones-12cm.jpg'/>
        </div>
    )
};

export default Posts;
