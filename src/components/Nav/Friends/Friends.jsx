import React from 'react';
import classes from './Friends.module.css';


function Friends(props) {

    return (
        <div>
            <img src = {props.src} className={classes.imgSize}/>
            <span className={classes.span}>{props.name}</span>
        </div>
    )
}

export default Friends
